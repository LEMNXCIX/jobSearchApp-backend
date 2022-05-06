const userModel = require('../models/user')

class Users{

  // obtiene todos los usuarios
  async getAll(){

    try {
      const users = await userModel.find()

      return users
      
    } catch (error) {
      console.log(error)
    }
  } 

  // obtiene un usuario
  getOne(){

  } 

  // crea un usuario
  create(){

  } 

  // modifica un usuario
  update(){

  } 

  // borra un usuario
  delete(){

  } 
}


module.exports = Users