const {gql} = require ('apollo-server-express');

const typeDefs=gql`
  type user{
    nombre: String
    identificacion: Int
    correo: String
    estado: String
    perfil: String
  }
  type Proyecto{
    name: String,
    budget: Int
  }

  type Query{
    usuarios: [user]
    usuario(identificacion: Int): user
    proyectos: [Proyecto]
  }

`

module.exports = typeDefs