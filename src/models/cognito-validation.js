const CognitoExpress = require("cognito-express")

//Initializing CognitoExpress constructor
const cognitoExpress = new CognitoExpress({
    region: "us-east-1",
    cognitoUserPoolId: "us-east-1_dXlFef73t",
    tokenUse: "access", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});

const validate = (token, callback) => {
    return callback({})
}

export default validate
