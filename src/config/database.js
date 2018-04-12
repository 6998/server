import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

// const uri = process.env.mongoUri
// const uri = "mongodb://admin:A1b2c3d4e5@ds135592.mlab.com:35592/gonedo-server-staging-sandbox"
module.exports.connect =  (uri)=>{
  mongoose.connect(uri)
  console.log(`Running DB ${uri}`)
}

