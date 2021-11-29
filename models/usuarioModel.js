const {Schema, model} = require ('mongoose')

const usuario = new Schema({
  nombre: {
    type: String,
    require: true
  },
  
  identificacion: {
    type: Number,
    unique: true,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  clave: {
    type: String,
    require: true
  },
  estado: {
    type: String,
    default: "inactive"
  },
  perfil: {
    type: String,
    require: true
  }
})

module.exports = model(/* user representa la colecion en la db */'user', usuario, /* "Nombre fijo para la base de datos" */)