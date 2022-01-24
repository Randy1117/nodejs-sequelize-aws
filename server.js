require("dotenv").config(); //
require("./utils/WooComerce");//initialize woocomerce object to avoid multi instance api object
const express = require("express");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json({ limit : "30mb", extended: true}));
app.use(express.urlencoded({ limit : "30mb", extended: true}));
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// Requiring our models for syncing
const db = require("./models");


app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow 
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware

  next();
});
app.use(routes);

// db.sequelize.sync({ force: true }).then(function() { : borra todos los datos
// db.sequelize.sync({ force: false }).then(function() { : no los borra

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});