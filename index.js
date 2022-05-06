// importando modulos
const express = require("express");
const { port } = require("./config");
const { conexion } = require("./config/db");

// inicia express
const app = express();

//Se conecta a MongoDB
conexion();

//Middleware para usar JSON
app.use(express.json())

// importando rutas 
require('./routes/users.routes')







// Inicia servidor
app.listen(port, () => {
  console.log("listening on port " + port);
});
