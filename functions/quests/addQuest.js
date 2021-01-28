const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase");
var db = admin.database();

// Add Quest
exports.addQuest = functions.https.onRequest((req, res) => {
  let newQuest = {
    title: req.body.title,
    description: req.body.description,
    questType: req.body.questType,
    questFrequency: req.body.questFrequency,
    isComplete: req.body.isComplete,
    isActive: req.body.isActive,
    createdOn: req.body.createdOn,
    updatedOn: req.body.updatedOn
  };

  let newUserRef = admin.database().ref('quest/:qid').set({
      newQuest
  })
  .then(function(){
    console.log("Successfully wrote quest ");
    return res.status(200)
  })
  .catch(function(error){
    return res.status(400).json(error)
  })
});
