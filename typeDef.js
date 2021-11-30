const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type proyecto {
    nombre: String
    saldo: Int
    estado: String
    lider: String
  }
  type usuario {
    nombre: String
    identificacion: Int
    perfil: String
    estado: String
  }
  type Query {
    proyecto: [proyecto]
    getProject(nombre: String): proyecto
    usuario: [usuario]
    getUsuario(estado: String): usuario
  }
  input UserInput {
    nombre: String
    identificacion: Int
    clave: String
    perfil: String
  }
  type Mutation {
    createUser(user: UserInput): String
    activeUser(identificacion: Int): String
    deleteUser(identificacion: Int): String
  }
`;
/* 
ejemplo 
query {
  proyectos{
    nombre
    saldo
  }
} 

query {
  getProject(nombre: ""){
    nombre
    lider
    saldo
  }
}

query {
  usuario{
    nombre
  }
}

query{
  getUsuario(estado: "aprobado"){
    nombre
    estado
  }
}

mutation{
  createUser(user:{nombre: "Cristian", identificacion:94842954, perfil: "Docente", clave:"dfe7ftefg450&%$"})
}

Activar el usuario
mutation{
  activeUser(identificacion:882681710)
}

*/

module.exports = typeDefs;
