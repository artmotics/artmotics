
const Project = require('./models/proyectoModel')
const User =  require('./models/usuarioModel')

/* const listUsuarios=[
  {
    nombre: 'Cristian Hernandez',
    identificacion: 56348047,
    correo: 'calvo@calvo.com',
    estado: 'activo',
    perfil: 'docente'
  }
] */

const resolvers = {
  Query:{
    /* usuarios: () => listUsuarios,
    usuario: (parent, args, context, info)=> listUsuarios.find(user=> user.identificacion === args.identificacion), */
    proyecto: async () => await Project.find({}),
    getProject: async (parent, args, context, info) => await Project.findOne({nombre:args.nombre }),
    usuario: async () => await User.find({}),
    getUsuario: async (parent, args, context, info) => await User.findOne({estado:args.estado }),
  },
  Mutation:{
    createUser: async (parent, args, context, info) => {
      const {nombre, identificacion, clave, perfil} = args.user;
      const nuevoUsuario = new User(args.user);
      nuevoUsuario.save();
      return "Sucess Create User"
    }
  }
}


module.exports = resolvers
 