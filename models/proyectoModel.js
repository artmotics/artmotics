const { Schema, model } = require ('mongoose');

const project = new Schema({   
  nombre: String,
  saldo: String,
  estado: String,
  lider:String
})

module.exports = model('proyecto', project)