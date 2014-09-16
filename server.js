console.log("Server Starting...")

// Module dependencies:
var express = require("express")
  , app = express()                               // Express
  , http = require("http").createServer(app)      // HTTP
  , bodyParser = require("body-parser")           // Body-parser
  , io = require("socket.io").listen(http)        // Socket.IO
  , _ = require("underscore");                    // Underscore.js

/* Server config */

// Set IP
app.set("ip", "127.0.0.1");

// Set Port
app.set("port", 8080);

// Set VIEWS folder
app.set("views", __dirname + "/views");

// Use Jade
app.set("view engine", "jade");

// Specify public folder
app.use(express.static("public", __dirname + "/public"));

// Support JSON requests
app.use(bodyParser.json());

/*****************************
           ROUTING
 *****************************/

app.get("/", function(request, response) {
  	response.render("index");
  	// response.json(200, {message: "express is cool"});

});

/*****************************
        API Response
 *****************************/

app.post("/message", function(request, response) {
  // Example:
  // curl -X POST -H 'Content-Type:application/json' 'http://localhost:8080/message' -d '{"message":"Good News Everyone!"}'

  // request = {message : msg, };
  var message = request.body.message;

  // Error Handling
  if(_.isUndefined(message) || _.isEmpty(message.trim())) {
    return response.json(400, {error: "Message is invalid"});
  }

  // Success
  response.json(200, {message: "Message received"});

});

// Start HTTP server
http.listen(app.get("port"), app.get("ip"), function() {
  console.log("Server up and running. Go to http://" + app.get("ip") + ":" + app.get("port"));
});