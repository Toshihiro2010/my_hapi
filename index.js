var Hapi = require('hapi');
var users = require('./users');

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
    handler : function(req , res){
        var id = req.params.id;
        var username = req.params.username;
        res(users.findById2(id,username));
    }
});



server.start(function(){
    console.log("Hapi running at : " , server.info.uri);
});