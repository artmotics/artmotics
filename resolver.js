
const Project = require('./models/proyectoModel')
const User =  require('./models/usuarioModel')
var aes256 = require('aes256');

var key = "LACONTRASEÑAMASDIFICIL"

const resolvers = {
  Query:{
    proyecto: async () => await Project.find({}),
    getProject: async (parent, args, context, info) => await Project.findOne({nombre:args.nombre }),
    usuario: async () => await User.find({}),
    getUsuario: async (parent, args, context, info) => await User.findOne({estado:args.estado }),
  },
  Mutation:{
    createUser: async (parent, args, context, info) => {
      const {clave} = args.user;
      const nuevoUsuario = new User(args.user);
      const encryptedPlainText = aes256.encrypt(key, clave);
      nuevoUsuario.clave = encryptedPlainText
      nuevoUsuario.save();
      return "Sucess Create User"
    }
  }
}

module.exports = resolvers
   