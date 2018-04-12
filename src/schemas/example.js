'use strict';

import mongoose from 'mongoose'
import crypto from 'crypto'
import validator from 'validator'


const Schema = mongoose.Schema

const validateLocalStrategyProperty =  property=>{
	return property.length
}

const validateLocalStrategyEmail = email=> {
	return validator.isEmail(email, { require_tld: false })
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
		default: '',
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
    default: '',
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
	secretDat:{
		type: Date
	},
  contact: {
    type: String
  },
  displayName: {
  	type: String
	},
  address: {
  	city:{
  		type: String,
			address: String
		}
	},
  phone: {
    type: String
  },
});


export default mongoose.model('Company', ExampleSchema)