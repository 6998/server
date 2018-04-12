'use strict';

var _example = require('../schemas/example');

var _example2 = _interopRequireDefault(_example);

var _responses = require('../utils/responses');

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var example = function example(req, res, next) {
  _responses2.default._400(res, null);
};

var requireLogin = function requireLogin(req, res, next) {
  // TODO
  // if(req.user)
  //   next();
  // else
  //   response._400(res, null)
};

module.exports = {
  example: example,
  requireLogin: requireLogin
};
//# sourceMappingURL=company.js.map
