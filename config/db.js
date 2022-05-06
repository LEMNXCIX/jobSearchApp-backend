const mongoose = require("mongoose");
const { dbUsername, dbPassword, dbHost, dbName } = require("./index");

const conexion = async () => {
  
    const conn = await mongoose.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
    );
    console.log("Mongo DB connected:", conn.connection.host);
  
};

module.exports = { conexion, mongoose };


// TODO arreglar conexion con mongo atlas