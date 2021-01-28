const functions = require("firebase-functions");

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
