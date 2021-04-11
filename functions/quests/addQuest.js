const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');

// Add Quest
exports.addQuest = functions.https.onRequest((req, res) => {
    // Get the logged in user
    let user = firebase.auth().currentUser;
    if (user != null) let userKey = user.uid + '/';
    // access the user you want to write the quest to
    let ref = admin.database().ref('/quests/' + userKey);
    // Create entry of new quest
    let newRef = ref.push();
    const refKey = newRef.key;
    const questRef = 'quests/' + userKey + refKey;
    admin
        .database()
        .ref(questRef)
        .set({
            title: req.body.data.title,
            description: req.body.data.description,
            questType: req.body.data.questType,
            questFrequency: req.body.data.questFrequency,
            isComplete: req.body.data.isComplete,
            isActive: req.body.data.isActive,
            createdOn: req.body.data.createdOn,
            updatedOn: req.body.data.updatedOn
        })
        .then(function () {
            console.log('Successfully wrote quest ');
            return res.status(200).json({
                title: req.body.data.title,
                description: req.body.data.description,
            });
        })
        .catch(function (error) {
            console.log(error);
            return res.status(400).json(error);
        });
});
