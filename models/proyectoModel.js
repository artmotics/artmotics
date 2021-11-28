const { Schema, model } = require ('mongoose');

const project = new Schema({   
  name: {
    type: String,
    require: true
  },
  budget: {
    type: Number,
    require: true
  },
  state: {
    type: String,
    default: "inactive"
  },
  leader: {
    type: String,
    require: true 
  }
})

module.exports = model('proyectos', project)