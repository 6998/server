'use strict';

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _sendgrid = require('./config/sendgrid');

var _sendgrid2 = _interopRequireDefault(_sendgrid);

var _example = require('./routers/example');

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!process.env.ENV) // make sure we have env params
  _dotenv2.default.config

  // init dotenv for development

  ();global.promise = Promise;

if (process.env.ENV === "development") {
  _dotenv2.default.config();
  console.log('\n\n=== ' + process.env.ENV + ' ===\n'

  // prints mongoose errors //
  // mongoose.set('debug', (collectionName, method, query, doc) => {
  // 	debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc)
  // })
  );
}

Promise.all([_database2.default.connect(process.env.mongoUri), _express2.default.init(), _sendgrid2.default.init()]).then(function () {

  console.log('\n=== Init finished ===\n');

  _express2.default.app.use("/company", _example2.default);

  _express2.default.app.use("/", function (req, res) {
    res.send("Text Pay Server ");
  });
}).catch(function (e) {
  console.log('errors in running server: \n ' + e);
  return resolve();
}

/*
      <a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_ByD3ILYKPapACHNkggMyRusOnbODcDjC&scope=read_write&state=5a37395bb208f41d7fcb5c96">
 */
);
//# sourceMappingURL=app.js.map
