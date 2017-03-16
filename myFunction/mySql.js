var mysql = require("/server/test1/node_modules/mysql");
var ObjUser = require("../model/user_model");
var Promise = require('promise');


var mysql_conn = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'add_dict'
});

mysql_conn.connect();
mysql_conn.query('SELECT * FROM user ', function(error , result , fields){

    if(error){
        console.error('error conneting : ' + error.stack);
        return;
    }
    let temp = [];   
    result.forEach(function(users){
        
        var tempUser = new ObjUser.Users(users.id , users.username ,users.password,users.name,users.status );
        temp.push(tempUser);
    });
    //console.log("*************************");
    result = JSON.stringify(result);
    result = JSON.parse(result);
    //console.log("field = > " , result[1].name);

});


exports.findLogin = function(user,pass){
    /*console.log("user => " , user , pass);
    mysql_conn.query("SELECT * FROM user WHERE username = '" + user + "' AND password = +" + pass  ,function(error , result , fields){

        if(error){
            console.error('error connect : ' + error.stack);
            return 404;
        }
        console.log("result ==> " , result);
        return result;
    });*/

    return new Promise(function(resolve,reject){
        //console.log("user => " , user , pass);
        mysql_conn.query("SELECT * FROM user WHERE username = '" + user + "' AND password = +" + pass  ,function(error , result , fields){

            if(error){
                console.error('error connect : ' + error.stack);
                //return 404;
                reject({errorCode : 404});
            }
            //console.log("result ==> " , result);
            //return result;
            resolve(result);
        });
    });

}

exports.findall = function(){
    var result = "555";
    mysql_conn.query('SELECT * FROM user ' , function(error , res , field){
        if(error){
            console.error('error conneting : ' + error.stack);
            return 404;
        }
        res = JSON.stringify(res);
        res = JSON.parse(res);
        console.log("res =>" , res[0]);
        return res;
    })
    //return result;
}

exports.findall2 = function(){
    var result = "5555";
    
    return result;
}