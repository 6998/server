import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import Promise from 'bluebird'
import passport from 'passport'
import session from 'express-session'
import mongoose from 'mongoose'
import cors from 'cors'
import Company from '../schemas/example'
// const MongoStore = require('connect-mongostore')(session);
const MongoStore = require('connect-mongo')(session)

const app = express()

module.exports.init = ()=> {
	return new Promise((resolve, reject) => {

		app.use(cors({credentials: true,  origin: true}))

    app.use(bodyParser.json())

		app.use(bodyParser.urlencoded({ extended: true }))
	
		app.use(cookieParser())

		app.use((req,res,next)=>{
			console.log(req.method, req.path)
			if(req.method === "OPTIONS")
				res.send()
			else
				next()
		})
		
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

    app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");

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

    const port = process.env.PORT || 3000

    const server = app.listen(process.env.PORT, () => {
      console.info(`server started on port ${process.env.PORT}`)
      return resolve()
    })

	})
}


module.exports.app = app;
