const constants = require('../constants');
var Database = require("../database/database");
var nodemailer = require('nodemailer');

module.exports.create =  async({Customer_name,Movie_title,Movie_time,Ticket_price},callback) => { 
    try {
         await Database.connectionPool.getConnection(async function(err, connection){ 
            connection.changeUser({
                database : Database.databaseName
            }, function(err) {
                if (err) {
                // console.log(err);
                    console.log("Database is not selected");
                    callback(new Error(err),null,null);
                // throw err
                }
                else {
                  var addpost = "INSERT INTO Tickets (Customer_name,Movie_title,Movie_time,Ticket_price)VALUES('"+Customer_name+"','"+Movie_title+"','"+Movie_time+"',"+Ticket_price+")";
                  connection.query(addpost, async function (err, result, fields) {
                      if (err){
                        console.log("Query  is not executed");
                        callback(new Error(err),null,null);
                      }
                      else {
                        Object.keys(result).forEach(async function(key) {
                           var course= result[key];
                           callback(null, course,1);  
                        });
                         
                      }
                  });
                } // end of if database is selected//////////////////////
            });//end of changeUser
            connection.release();//release the connection
        }); // end of getConnection
          
}catch(error){
    console.log('Something went wrong: Service: Addpost',error);
    //throw new Error(error);
    callback(new Error(error),null,null);
}
}

module.exports.search =  async ({Ticket_id},callback) => {
    try {
        await Database.connectionPool.getConnection(async function(err, connection){ 
             connection.changeUser({
                 database : Database.databaseName
             }, function(err) {
                 if (err) {
                     console.log("Database is not selected");
                     callback(new Error(err),null,null);
                 }else { //if database is selected
                    //////////////////////////////
                    // STEP=1 :check whether the user is already register 
                     var UserSignIn = "SELECT * FROM Tickets WHERE Ticket_id='"+Ticket_id+"'";
                     //console.log(selectAssociates);
                     connection.query(UserSignIn, async function (err, result, fields) {
                         if (err){
                             console.log("Query  is not executed");
                             callback(new Error(err),null,null);
                         }else {
                             if(result.length==0) { //if no results send the responce 
                                callback(null,{},1); 
                             }else { //if results is there                                    
                                    Object.keys(result).forEach(async function(key) {
                                        var row = result[key];  
                                            callback(null,row,1);
                                    }); 
                                 }
                             }
                         });//SREP=1 end
                        //////////////////////////  
                 } // end of if database is selected
             });//end of changeUser
             connection.release();//release the connection
         });    // end of getConnection              
 }catch(error){
     console.log('Something went wrong: Service: Login',error);
     callback(new Error(error),null,null);
 }

}

module.exports.Update =  async ({Ticket_id,Customer_name,Movie_title,Movie_time,Ticket_price},callback) => {
    try {
         await Database.connectionPool.getConnection(async function(err, connection){ 
            connection.changeUser({
                database : Database.databaseName
            }, function(err) {
                if (err) {
                // console.log(err);
                    console.log("Database is not selected");
                    callback(new Error(err),null,null);
                // throw err
                }
                else {
                  var coursecreate = "UPDATE  Tickets SET  Customer_name='"+Customer_name+"' , Movie_title='"+Movie_title+"',Movie_time='"+Movie_time+"',Ticket_price="+Ticket_price+" WHERE Ticket_id="+Ticket_id+"";
                  connection.query(coursecreate, async function (err, result, fields) {
                      if (err){
                          console.log("Query  is not executed");
                          callback(new Error(err),null,null);
                      }
                      else {
                        Object.keys(result).forEach(async function(key) {
                           var update= result[key]; 
                           callback(null, update,1);  
                        }); 
                      }
                  });
                } // end of if database is selected//////////////////////
            });//end of changeUser
            connection.release();//release the connection
        }); // end of getConnection
          
}catch(error){
    console.log('Something went wrong: Service: courseCreate',error);
    //throw new Error(error);
    callback(new Error(error),null,null);
}
}

module.exports.delete=  async ({Ticket_id},callback) => {
    try {
        var email;
         await Database.connectionPool.getConnection(async function(err, connection){ 
              connection.changeUser({
                  database : Database.databaseName
              }, function(err) {
                  if (err) {
                      console.log("Database is not selected");
                      callback(new Error(err),null,null);
                  }else {//if database is selected
                      var deletepost = "delete from Tickets WHERE Ticket_id='"+Ticket_id+"'";
                      connection.query(deletepost, async function (err, result, fields) { //query
                          if (err){
                          console.log("Query  is not executed");
                          callback(new Error(err),null,null);
                          }else {
                              Object.keys(result).forEach(async function(key) {//query
                                var delpost = result[key]; 
                                callback(null,delpost,1);
                              });
                          }
                      });
                  } // end of if database is selected
              });//end of changeUser
              connection.release();//release the connection
          }); // end of getConnection
            
  }catch(error){
      console.log('Something went wrong: Service: Deletepost',error);
      callback(new Error(error),null,null);
  }
}

module.exports.moneycount =  async ({from_date,to_date},callback) => {
    try {
        await Database.connectionPool.getConnection(async function(err, connection){ 
             connection.changeUser({
                 database : Database.databaseName
             }, function(err) {
                 if (err) {
                     console.log("Database is not selected");
                     callback(new Error(err),null,null);
                 }else { //if database is selected
                    //////////////////////////////
                    // STEP=1 :check whether the user is already register 
                     var UserSignIn = "SELECT sum(Ticket_price) FROM Tickets WHERE Creation_date between Creation_date='"+from_date+"' and Creation_date='"+to_date+"'";
                     //console.log(selectAssociates);
                     connection.query(UserSignIn, async function (err, result, fields) {
                         if (err){
                             console.log("Query  is not executed");
                             callback(new Error(err),null,null);
                         }else {
                             if(result.length==0) { //if no results send the responce 
                                callback(null,{},1); 
                             }else { //if results is there                                    
                                        Object.keys(result).forEach(async function(key) {
                                            var row = result[key];  
                                            callback(null,row,1);
                                        }); 
                                 }
                             }
                         });//SREP=1 end
                        //////////////////////////  
                 } // end of if database is selected
             });//end of changeUser
             connection.release();//release the connection
         });    // end of getConnection              
 }catch(error){
     console.log('Something went wrong: Service: Login',error);
     callback(new Error(error),null,null);
 }

}
