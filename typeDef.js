const {gql} = require ('apollo-server-express');

const typeDefs=gql`
  type user{
    nombre: String
    identificacion: Int
    correo: String
    estado: String
    perfil: String
  }
  type proyecto{
    nombre: String
    saldo:String
    estado: String 
    lider: String
  }
  type Query{
    usuarios: [user]
    usuario(identificacion: Int): user
    proyecto: [proyecto]
    getProject(nombre: String): proyecto
  }
  inpu UserInput{
    nombre:String
    identificacion:Int
    clave:String
    perfil:String
  }
  type Mutation{
    createUser(user:UserInput):String
  }

`
module.exports = typeDefs