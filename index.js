const express = require("express");
const { port } = require("./config");
const { conexion } = require("./config/db");


const app = express();

//Se conecta a MongoDB
conexion();

// server listening
app.listen(port, () => {
  console.log("listening on port " + port);
});
