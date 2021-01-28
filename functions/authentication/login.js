const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase");
admin.initializeApp(functions.config().firebase);
firebase.initializeApp(functions.config().firebase);

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
