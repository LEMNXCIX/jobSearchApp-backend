// importando modulos
const express = require("express");
const { port } = require("./config");
const { conexion } = require("./config/db");
const vacante = require("./routes/vacantes");
const users = require("./routes/users.routes");
const auth = require("./routes/auth.routes");



//Se conecta a MongoDB
conexion();

// inicia express
const app = express();

//Middleware para usar JSON
app.use(express.json());

//Rutas
vacante(app);
users(app);
auth(app);



// Inicia servidor
app.listen(port, () => {
  console.log("listening on port " + port);
});
