import Sendgrid from '@sendgrid/mail'

module.exports.init = ()=>{
  return new Promise((resolve, reject) => {
    console.log("setting sendgrid...")
    // Sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
    // console.log(process.env.SENDGRID_API_KEY)
    resolve()
  })
}

module.exports.Sendgrid = Sendgrid