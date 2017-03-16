var mysql = require("/server/test1/node_modules/mysql");
var ObjUser = require("../model/user_model");



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
        
        var tempUser = new ObjUser.Users(users.id , users.username ,users.password,users.name,users.status );
        temp.push(tempUser);
    });
    console.log("*************************");
    result = JSON.stringify(result);
    result = JSON.parse(result);
    console.log("field = > " , result[1].name);

});
mysql_conn.end();

