var mysql = require("/server/test1/node_modules/mysql");
var ObjUser = require("./user_model");

var mysql_conn = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'add_dict'
});
/*
console.log('start before mysql');

mysql_conn.query('SELECT * FROM user ', function(err , rows){
    if(err){
        console.log("error => " , err);
    }

    /
    var user = new User();
    for(id in rows){
        /*user.id = rows[id][0];
        user.username = rows[id][1];
        user.password = rows[id][2];
        user.name = rows[id][3];
        user.status = rows[id][4];
        console.log(rows[id]);
    }
})

console.log('end after mysql');*/


mysql_conn.connect();
mysql_conn.query('SELECT * FROM user ', function(error , result , fields){

    if(error){
        console.error('error conneting : ' + error.stack);
        return;
    }
    let temp = [];   
    result.forEach(function(users){
        
        var tempUser = new Object();
        tempUser.id = users.id;
        tempUser.username = users.username;
        tempUser.password = users.password;
        tempUser.name = users.name;
        tempUser.status = users.status;
        console.log("myCar.id=> ",  users.id);
        console.log("id => ", users.id);
        console.log("username = > " , users.username);
        console.log("password =>" , users.password);
        console.log("name => ", users.name);
        console.log("status =>" , users.status);

        temp.push(tempUser);
    });
    console.log("*************************");
    console.log(temp);
    //console.log('The solution is: ', result[0]);
    
    
});
mysql_conn.end();