console.log("Server Starting...")

// Module dependencies:
var express = require("express")
  , app = express()                               // Express
  , http = require("http").createServer(app)      // HTTP
  , bodyParser = require("body-parser");          // Body-parser

/* Server config */

// Set IP
app.set("ip", "127.0.0.1");

// Set Port
app.set("port", 8080);

// Support JSON requests
app.use(bodyParser.json());

// ROUTING
// Handle route "GET /", as in "http://localhost:8080/"
app.get("/", function(request, response) {

  // Show a simple response message
  response.send("Server is up and running");

});

// Start HTTP server
http.listen(app.get("port"), app.get("ip"), function() {
  console.log("Server up and running. Go to http://" + app.get("ip") + ":" + app.get("port"));
});