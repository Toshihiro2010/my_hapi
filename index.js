var Hapi = require('hapi');
var users = require('./users');
var mysql = require("mysql");
var myFuction = require("./myFunction/myFunction");

var server = new Hapi.Server();

server.connection({
    host : '0.0.0.0', 
    port : 30
});


server.route({
    method : 'GET',
    path : '/',
    handler : function(req , res){
        res('Hello Hapi :)!');
    }
});

server.route({
    method : 'GET',
    path : '/users',
    handler : function(req , res){
        res(users.findall());
    }
});


server.route({
    method : 'GET' , 
    path : '/users/{id}',
    config:{
        response:{
            emptyStatusCode:204,
            
        },
        handler : function(req , res){
            var id = req.params.id;
            //res(users.findById(id));
            var result = users.findById(id);
            res(result);
            //console.log(res(result));
        }
    }
});

server.route({
    method : 'GET' , 
    path : '/users/{id}/{username}',
    config : {
        response :{
            emptyStatusCode : 204,
        },
        handler : function(req , res){
            var id = req.params.id;
            var username = req.params.username;
            res(users.findById2(id,username));
        }
    }
});

server.route({
    method : 'GET',
    path : '/login/{username}/{password}',
    config : {
        response : {
            emptyStatusCode : 204,
        },
        handler : function(req , res){
            var user = req.params.username;
            var pass = req.params.password;
            myFuction.findLogin(user,pass).then(function(data){
                res(data);
            }).catch(function(err){
                //res(err);
            });
        }
    }

});

server.route({
    method : 'GET',
    path : '/login',
    handler : function(req , res){
        res(myFuction.findall());
    }
});



server.start(function(){
    console.log("Hapi running at : " , server.info.uri);
});