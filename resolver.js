
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
    proyectos: async () => await Project.find({})
  } }


module.exports = resolvers
 