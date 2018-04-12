'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _example = require('../schemas/example');

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const MongoStore = require('connect-mongostore')(session);
var MongoStore = require('connect-mongo')(_expressSession2.default);

var app = (0, _express2.default)();

module.exports.init = function () {
		return new _bluebird2.default(function (resolve, reject) {

				app.use((0, _cors2.default)({ credentials: true, origin: true }));

				app.use(_bodyParser2.default.json());

				app.use(_bodyParser2.default.urlencoded({ extended: true }));

				app.use((0, _cookieParser2.default)());

				app.use(function (req, res, next) {
						console.log(req.method, req.path);
						if (req.method === "OPTIONS") res.send();else next();
				}

				// app.use(session({
				// 	secret: 'foo',
				// 	name: "textpay",
				// 	store: new MongoStore({ mongooseConnection: mongoose.connection }),
				//  resave: true,
				//  saveUninitialized: true,
				//  // cookie: {
				//  //   domain: "localhost"
				//  // }
				// }))

				// app.use(passport.initialize())

				// app.use(passport.session())

				// Serialize sessions
				// passport.serializeUser(function (user, done) {
				// 	done(null, user._id)
				// })
				//
				// // Deserialize sessions
				// passport.deserializeUser(function (id, done) {
				//  Company.findOne({
				// 		_id: id
				// 	}, '-salt -password', function (err, user) {
				// 		if(!user)
				// 			return done(err, null)
				// 		done(err, user)
				// 	})
				// });

				);app.use(function (req, res, next) {

						// Website you wish to allow to connect
						res.header("Access-Control-Allow-Origin", "http://localhost:3001");

						// Request methods you wish to allow
						res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

						// Request headers you wish to allow
						res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

						// Set to true if you need the website to include cookies in the requests sent
						// to the API (e.g. in case you use sessions)
						res.setHeader('Access-Control-Allow-Credentials', true);

						// Pass to next layer of middleware
						next();
				});

				// init startegies
				// require('./passport')(passport)

				var port = process.env.PORT || 3000;

				var server = app.listen(process.env.PORT, function () {
						console.info('server started on port ' + process.env.PORT);
						return resolve();
				});
		});
};

module.exports.app = app;
//# sourceMappingURL=express.js.map
