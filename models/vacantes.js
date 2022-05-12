const { mongoose } = require("../config/db");
const Schema = mongoose.Schema;

const vacanteSchema = new Schema({
  nombre: String,
  empresa: String,
  fPublicacion: String,
  fLimite: String,
  ubicacion: String,
  detalles: 
    {
      modalidad: String,
      jornada: String,
      salario: String,
      descripcion: String,
      requisitos: String,
      categorias: [],
      conocimientos: [],
      nivel: {
        type: String,
        enum: ["Basico", "Intemedio", "Avanzado"],
      },
    },
});

const VacanteModel = mongoose.model("Vacante", vacanteSchema);
module.exports = VacanteModel;
