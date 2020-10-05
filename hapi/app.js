const Hapi = require("hapi");
const OS = require("os");
var Mongoose = require("mongoose");

var server = new Hapi.Server({
  host: OS.hostname(),
  port: "3000",
  routes: { cors: true },
});

Mongoose.connect("mongodb://mongo:27017/persons", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var db = Mongoose.connection;

const Person = require("./models/Person");

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello Hapi!";
  },
});

server.route({
  method: "GET",
  path: "/mongo/works",
  handler: (request, h) => {
    if (Mongoose.connection.readyState) {
      return h.response(Mongoose.connection.readyState);
    } else {
      return h.response("Service Unavailable.").code(503);
    }
  },
});

server.route({
  method: "GET",
  path: "/persons",
  handler: async (request, h) => {
    try {
      var start = new Date();

      var persons = await Person.aggregate([
        {
          $group: {
            _id: "$age",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: 1 } },
      ]);

      var time = new Date() - start;

      var response = {
        time: time,
        persons: persons,
      };

      return h.response(response);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
});

server.route({
  method: "POST",
  path: "/persons",
  handler: async (request, h) => {
    try {
      var person = new Person();
      var persons = [
        {
          name: "Test name1",
          age: 25,
        },
        {
          name: "Test name2",
          age: 25,
        },
        {
          name: "Test name3",
          age: 29,
        },
        {
          name: "Test name4",
          age: 34,
        },
        {
          name: "Test name5",
          age: 25,
        },
      ];

      result = await person.collection.insertMany(persons);

      return h.response(result);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
});

server.start().then((result) => {
  console.log("CONTAINER HOSTNAME: " + OS.hostname());
});
