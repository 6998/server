"use strict";

var _example = require('../schemas/example');

var _example2 = _interopRequireDefault(_example);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  passport.use(new _passportLocal2.default({
    usernameField: 'email',
    passwordField: 'password'
  }, function (email, password, done) {
    _example2.default.findOne({ email: email }).then(function (user) {
      if (user && user.authenticate(password)) done(user);else done(false);
    }).reflect(function (err) {
      done(false);
    });
  }));
};
//# sourceMappingURL=passport.js.map
