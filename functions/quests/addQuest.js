const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase");

// Add Quest
exports.addQuest = functions.https.onRequest((req, res) => {
  let ref = admin.database().ref('Quest');
  let newRef = ref.push();
  newRef.set({
    title: req.body.title,
    description: req.body.description,
    questType: req.body.questType,
    questFrequency: req.body.questFrequency,
    isComplete: req.body.isComplete,
    isActive: req.body.isActive,
    createdOn: req.body.createdOn,
    updatedOn: req.body.updatedOn,
    userId: req.body.userId
  })
  .then(function(){
    console.log("Successfully wrote quest ");
    return res.status(200).json({
      title: req.body.title,
      description: req.body.description,
    })
  })
  .catch(function(error){
    console.log(error)
    return res.status(400).json(error)
  })
});
