const VacanteModel = require("../models/vacantes");

class Vacantes {
  //Crear vacante
  async create(data) {
    try {
      const vacante = await VacanteModel.create(data);
      return vacante;
    } catch (error) {
      console.log(error);
    }
  }

  //Obtener todas las vacantes
  async getAll() {
    try {
      const vacantes = await VacanteModel.find();
      return vacantes;
    } catch (error) {
      console.log(error);
    }
  }

  //Obtener una sola vacante
  async getOne(id) {
    try {
      const vacante = await VacanteModel.findById(id);
      return vacante;
    } catch (error) {
      console.log(error);
    }
  }

  //Actualizar una vacante
  async update(id, data) {
    try {
      const vacante = await VacanteModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return vacante;
    } catch (error) {
      console.log(error);
    }
  }

  //Eliminar una vacante
  async delete(id) {
    try {
      const vacante = await VacanteModel.findByIdAndDelete(id);
      return vacante;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Vacantes;
