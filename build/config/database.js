'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

// const uri = process.env.mongoUri
// const uri = "mongodb://admin:A1b2c3d4e5@ds135592.mlab.com:35592/gonedo-server-staging-sandbox"
module.exports.connect = function (uri) {
  _mongoose2.default.connect(uri);
  console.log('Running DB ' + uri);
};
//# sourceMappingURL=database.js.map
