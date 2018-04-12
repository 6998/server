const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const randomstring = require("randomstring");

import server from '../build/app'
const objectID = require('mongodb').ObjectID

before(function () {
  server;
});

// after(function () {
//   server;
// });

describe('Company', ()=>{

  it('should pass', ()=>{

  })

})