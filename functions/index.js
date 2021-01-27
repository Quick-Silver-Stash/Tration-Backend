const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase");
admin.initializeApp(functions.config().firebase);
firebase.initializeApp(functions.config().firebase);

// REGISTER
exports.register = functions.https.onRequest((request, response) => {
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const email = request.body.email;
  const password = request.body.password;
  const quests = [];
  const notification = false;

  let authUser = admin
    .auth()
    .createUser({
      email: email,
      firstName: firstName,
      password: password,
      lastName: lastName,
      quests: quests,
    })
    .then(function (userRecord) {
      let tempId = "users/" + userRecord.uid;
      let sid = "settings/" + userRecord.uid;
      console.log("TempId: ", tempId);
      console.log(
        "Successfully created new user:",
        firstName,
        " ",
        lastName,
        "email:",
        email
      );
      // Add pushing notification
      let sref = admin.database().ref(sid).set({
        notification: notification,
      });
      let newUserRef = admin.database().ref(tempId).set({
        email: email,
        firstName: firstName,
        password: password,
        lastName: lastName,
        quests: [],
      });
      return response.status(200).json({
        email: email,
        password: password,
      });
    })
    .catch(function (error) {
      console.log("Error creating new user:", error);
      return response.status(400).json(400);
    });
});

// LOGIN
exports.login = functions.https.onRequest((request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (userRecord) {
      console.log("Successfully Logged In:", userRecord);
      return response.status(200).json(userRecord);
    })
    .catch(function (error) {
      console.log(
        "Error Logging In:",
        email,
        "Error Code: ",
        error.code,
        "Error Message: ",
        error.message
      );
      return response.status(400).json(error);
    });
});

// LOGOUT
exports.logout = functions.https.onRequest((request, response) => {
  // get the currently logged in user
  const user = firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      firebase
        .auth()
        .signOut()
        .then(function () {
          console.log("You are signed out!");
          response.status(200).end();
          return response.json();
        })
        .catch(function (error) {
          console.log(
            "Error Logging out ",
            "Error Code: ",
            error.code,
            "Error Message: ",
            error.message
          );
          response.status(400).end();
          return response.json();
        });
    } else {
      console.log("No Current User");
      response.status(200).end();
      return response.json();
    }
  });
});
