"use strict";

import Company from '../schemas/example';
import LocalStrategy from 'passport-local';


module.exports = ()=>{
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },(email, password, done)=>{
    Company.findOne({email: email}).then((user)=>{
      if(user && user.authenticate(password))
        done(user)
      else
        done(false)
    }).reflect((err)=>{
      done(false)
    })
  }))
}