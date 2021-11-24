const { Schema, model } = require ('mongoose');

const project = new Schema({   
  nombre: {
    type: String,
    require: true
  },
  lider: {
    type: String,
    require: true
  },
  facultad: {
    type: String,
    require: true
  },
  fechaInicio: {
    type: Date,
    default: new Date()
  } 
})

module.exports = model('proyecto', project)