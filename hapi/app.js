const Hapi = require("hapi");
const { request } = require("http");
const OS = require("os");
var Mongoose = require('mongoose');

var server = new Hapi.Server({
        host: OS.hostname(),
        port: "3000",
        routes: { "cors": true }
    });

Mongoose.connect(
        "mongodb://mongo:27017/dev_test",
        {useNewUrlParser: true}
    );
var db = Mongoose.connection;

Mongoose
  .connect(
    'mongodb://mongo:27017/dev_test',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

var db = Mongoose.connection;

server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
        return "Hello Hapi!";
    }
})

server.route({
    method: "GET",
    path: "/mongo/works",
    handler: (request, h) => {
        return Mongoose.connection.readyState;
    }
})

server.start().then(result => {
    console.log("CONTAINER HOSTNAME: " + OS.hostname());
});
