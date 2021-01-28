const register = require('./authentication/register');
const login = require('./authentication/login');
const logout = require('./authentication/logout');

exports.register = register.register;
exports.login = login.register;
exports.logout = logout.register;