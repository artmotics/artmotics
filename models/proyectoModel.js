const { Schema, model } = require ('mongoose');

const project = new Schema({   
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  facultad: String,
  activo: {
    type: Boolean,
    default: true
  },
  lider:String,
  integrantes: [Number]
})

module.exports = model('proyecto', project)