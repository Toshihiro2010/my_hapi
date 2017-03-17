var mySql = require("../myFunction/mySql");
var ObjUser = require("../model/user_model");
var Promise = require('promise');

exports.findall = function() {
    var user = mySql.findall();
    console.log("user = > " , user);
    console.log("end findall");
    return user;
};

/*
exports.findById = function (username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i];
        }
    }
};
*/


exports.findLogin = function (username,password) {
    /*console.log("password =>" , password);
    var user = mySql.findLogin(username,password);

    console.log("end findLogin");
    return user;*/
    return new Promise(function(resolve, reject){
        
        mySql.findLogin(username,password).then(function(data){
            console.log(data);
            if(data == []){
                data = "";
            }
            resolve(data);
        }).catch(function(err){
            console.log(err);
            reject(err);
            //throw new Error("Error Code :"+err);
        });
    });
    

    //console.log("end findLogin");
    //return user;
};
