const mongoose = require('mongoose');
const AutorSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
          },
          apellido: {
            type: String,
            required: true
          },
          fechaNacimiento: {
            type: Date
          },
          paisNacimiento: {
            type: String
          },
          biografia: {
            type: String
          },
          imagen: {
            type: String, // URL de la imagen
          },
          sitiosWeb: {
            type: [String], // Lista de URLs de sitios web
          }
          
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const AutorModel = mongoose.model('Autors', AutorSchema);
module.exports = AutorModel;
