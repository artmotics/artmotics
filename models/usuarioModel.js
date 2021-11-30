const { Schema, model } = require("mongoose");

const usuario = new Schema({
  nombre: {
    type: String,
    required: true,
  },

  identificacion: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: "inactive",
  },
  perfil: {
    type: String,
    required: true,
  },
});

module.exports = model("user", usuario, "users");
