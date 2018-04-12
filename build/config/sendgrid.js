"use strict";

var _mail = require("@sendgrid/mail");

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.init = function () {
  return new Promise(function (resolve, reject) {
    console.log("setting sendgrid..."
    // Sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
    // console.log(process.env.SENDGRID_API_KEY)
    );resolve();
  });
};

module.exports.Sendgrid = _mail2.default;
//# sourceMappingURL=sendgrid.js.map
