const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');

// Add Quest
exports.addQuest = functions.https.onRequest((req, res) => {
    let ref = admin.database().ref('/quests');
    let newRef = ref.push();
    const refKey = newRef.key;
    admin
        .database()
        .ref('quests/' + refKey)
        .set({
            title: req.body.data.title,
            description: req.body.data.description,
            questType: req.body.data.questType,
            questFrequency: req.body.data.questFrequency,
            isComplete: req.body.data.isComplete,
            isActive: req.body.data.isActive,
            createdOn: req.body.data.createdOn,
            updatedOn: req.body.data.updatedOn,
            userId: req.body.data.userId,
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
