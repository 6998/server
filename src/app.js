import app from './config/express'
import dotenv from 'dotenv'
import sendgrid from './config/sendgrid'
import exampleRouter from './routers/example'
import cognitoAuth from './models/cognito-validation'

if(!process.env.ENV) // make sure we have env params
	dotenv.config()

// init dotenv for development
global.promise = Promise

if(process.env.ENV === "development"){
  dotenv.config()
	console.log(`\n\n=== ${process.env.ENV} ===\n`)
}

Promise.all([
 	app.init(),
  sendgrid.init(),
]).then(()=>{
	console.log(`\n=== Init finished ===\n`)

  app.app.use(cognitoAuth)
  app.app.use("/example", exampleRouter)
  app.app.use("/", (req, res) => { res.send("server is running") })

}).catch((e)=>{
	console.log(`errors in running server: \n ${e}`)
  return resolve()
})

/*
	<a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_ByD3ILYKPapACHNkggMyRusOnbODcDjC&scope=read_write&state=5a37395bb208f41d7fcb5c96">
 */
