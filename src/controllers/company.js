import Example from '../schemas/example'
import response from '../utils/responses'

const example = (req,res, next)=>{
  response._200(res, true)
}

const requireLogin = (req, res, next)=>{
  // TODO
  // if(req.user)
  //   next();
  // else
  //   response._400(res, null)
}

module.exports = {
  example,
  requireLogin,
}
