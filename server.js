const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(routes);


// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_lfqf0fqn:faessbc5qamkvmklljmbnf5hjl@ds245677.mlab.com:45677/heroku_lfqf0fqn");
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://user1:password1@ds245677.mlab.com:45677/heroku_lfqf0fqn",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );
// process.on('uncaughtException', function (err) {
//   console.log(err);
// }); 

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
