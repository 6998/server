'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var validateLocalStrategyProperty = function validateLocalStrategyProperty(property) {
	return property.length;
};

var validateLocalStrategyEmail = function validateLocalStrategyEmail(email) {
	return _validator2.default.isEmail(email, { require_tld: false });
};

var ExampleSchema = new Schema({
	company: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in company']
	},
	stripeKey: {
		type: String,
		trim: true,
		default: ''
	},
	email: {
		type: String,
		index: {
			unique: true,
			sparse: true
		},
		lowercase: true,
		trim: true,
		default: '',
		validate: [validateLocalStrategyEmail, 'Please fill a valid email address']
	},
	password: {
		type: String,
		default: '',
		required: true
	},
	stripeId: {
		type: String,
		default: ''
	},
	salt: {
		type: String
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
	resetPasswordToken: {
		type: String
	},
	resetPasswordExpires: {
		type: Date
	},
	secret: {
		type: String
	},
	secretDat: {
		type: Date
	},
	contact: {
		type: String
	},
	displayName: {
		type: String
	},
	address: {
		city: {
			type: String,
			address: String
		}
	},
	phone: {
		type: String
	}
});

exports.default = _mongoose2.default.model('Company', ExampleSchema);
//# sourceMappingURL=example.js.map
