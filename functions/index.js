const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase");
admin.initializeApp(functions.config().firebase);
firebase.initializeApp(functions.config().firebase);

const register = require('./authentication/register');
const login = require('./authentication/login');
const logout = require('./authentication/logout');

exports.register = register.register;
exports.login = login.register;
exports.logout = logout.register;