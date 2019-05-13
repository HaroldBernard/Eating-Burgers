// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// For serving of static CSS
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ================================================================================
// ROUTER
// gives our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

var routes = require("./controllers/burgers_controllers")
app.use(routes);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);;
});