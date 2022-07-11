const userService = require('../service/userService');
const constants = require('../constants');

var globalRes;

module.exports.create =  async (req,res) => {
    globalRes = res;
    try {
        await userService.create(req.body,createResponse);
    }catch(error){
        console.log('Something went wrong: Controller : create',error); 
    }
}
function createResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;

                    response.status = 200;
                    response.message = constants.USERMESSAGE.ADD;
                    response.body = responseFromService;

            }
     }catch(error){
        console.log('Something went wrong: Controller :createResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}


module.exports.update =  async (req,res) => {
    globalRes = res;
    try {
        await userService.update(req,updateResponse);
    }catch(error){
        console.log('Something went wrong: Controller : update',error); 
    }
}
function updateResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.UPDATE;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :updateResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}


module.exports.delete =  async (req,res) => {
    globalRes = res;
    try {
        await userService.delete(req.body,deleteResponse);
    }catch(error){
        console.log('Something went wrong: Controller : Deletepost',error); 
    }
}
function deleteResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.DELETE;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :DeleteResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}


module.exports.search =  async (req,res) => {
    globalRes = res;
    try {
        await userService.search(req,searchResponse);
    }catch(error){
        console.log('Something went wrong: Controller : search',error); 
    }
}
function searchResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.SEARCH;
                    response.body = responseFromService;   
            }
     }catch(error){
        console.log('Something went wrong: Controller :searchResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}


module.exports.moneycount =  async (req,res) => {
    globalRes = res;
    try {
        await userService.moneycount(req,moneycountResponse);
    }catch(error){
        console.log('Something went wrong: Controller : search',error); 
    }
}
function moneycountResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.SEARCH;
                    response.body = responseFromService;   
            }
     }catch(error){
        console.log('Something went wrong: Controller :moneycountResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}

