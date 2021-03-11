const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase");
// var db = admin.database();

// Add Quest
exports.test = functions.https.onRequest((req, res) => {
  /*Need to figure out how to create a PK*/
  firebase.firestore().ref('Quest/SKL/').set({
    title: req.body.title,
  })
  .then(function(questId){
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
