const Project = require("./models/proyectoModel");
const User = require("./models/usuarioModel");
var aes256 = require("aes256");

var key = "LACONTRASEÑAMASDIFICIL";

const resolvers = {
  Query: {
    proyecto: async () => await Project.find({}),
    getProject: async (parent, args, context, info) =>
      await Project.findOne({ nombre: args.nombre }),
    usuario: async () => await User.find({}),
    getUsuario: async (parent, args, context, info) =>
      await User.findOne({ estado: args.estado }),
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      const { clave } = args.user;
      const nuevoUsuario = new User(args.user);
      const encryptedPlainText = aes256.encrypt(key, clave);
      nuevoUsuario.clave = encryptedPlainText;
      return nuevoUsuario
        .save()
        .then((u) => "Sucess create user")
        .catch((err) => "Failed create user");
    },
    activeUser: (parent, args, context, info) => {
      return User.updateOne(
        { identificacion: args.identificacion },
        { estado: "active" }
      )
        .then((u) => "User Active")
        .catch((err) => "Failed Activation");
    },
    deleteUser: (parent, args, context, info) => {
      return User.deleteOne({ identificacion: args.identificacion })
        .then((u) => "User delete")
        .catch((err) => "Failed delete");
    },
    deleteProject: (parent, args, context, info) => {
      return Project.updateOne({ nombre: args.nombre }, { activo: "false" })
        .then((u) => "Project delete")
        .catch((err) => "Failed delete");
    },
    insertUserProject: async (parent, args, context, info) => {
      const user = await User.findOne({ identificacion: args.identificacion });
      if (user && user.estado == "active") {
        const project = await Project.findOne({ nombre: args.nombreProyecto });
        if (project && project.activo) {
          if(project.integrantes.find(i => i == user.identificacion)){
            return "This user is belong in the project"
          }else{
            await Project.updateOne(
              { nombre: args.nombreProyecto },
              { $push: { integrantes: user.identificacion } })
              return "Sucess user add"
          }
          
        } else {
          return "Project is invalid";
        }
      } else {
        return "User is invalid";
      }
    },
  },
};

module.exports = resolvers;
