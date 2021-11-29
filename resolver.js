
const Project = require('./models/proyectoModel')

const listUsuarios=[
  {
    nombre: 'Cristian Hernandez',
    identificacion: 56348047,
    correo: 'calvo@calvo.com',
    estado: 'activo',
    perfil: 'docente'
  }
]

const resolvers = {
  Query:{
    usuarios: () => listUsuarios,
    usuario: (parent, args, context, info)=> listUsuarios.find(user=> user.identificacion === args.identificacion),
    proyecto: async () => await Project.find({}),
    getProject: async (parent, args, context, info) => await Project.findOne({nombre:args.nombre })
  },
  Mutation:{
    createUser: (parent, args, context, info) => {

    }
  }
}


module.exports = resolvers
 