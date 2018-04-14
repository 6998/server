const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const randomstring = require("randomstring");
const cognito_validation = require('../build/models/cognito-validation')

import server from '../build/app'
const objectID = require('mongodb').ObjectID

before(function () {
  server;
});

// after(function () {
//   server;
// });

describe('Validate', () => {
  it('should return false', ()=>{
    cognito_validation(null, (err, user)=>{
      assert.isTrue(err);
    })
  })
  it('Should check validation', () => {

  })
})
