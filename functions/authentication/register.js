const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase");

// REGISTER
exports.register = functions.https.onRequest((request, response) => {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const email = request.body.email;
    const password = request.body.password;
    const quests = [];

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
            console.log("TempId: ", tempId);
            console.log(
                "Successfully created new user:",
                firstName,
                " ",
                lastName,
                "email:",
                email
            );
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
