const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type proyecto {
    nombre: String
    activo: Boolean
    lider: String
    facultad: String
  }
  type usuario {
    nombre: String
    identificacion: Int
    email: String
    perfil: String
    estado: String
  }
  type Query {
    proyecto : [proyecto]
    getProject(nombre: String): proyecto
    usuario: [usuario]
    getUsuario(estado: String): usuario
  }
  input UserInput {
    nombre: String
    identificacion: Int
    email: String 
    clave: String
    perfil: String
  }
  type Mutation {
    createUser(user: UserInput): String
    activeUser(identificacion: Int): String
    deleteUser(identificacion: Int): String
    deleteProject(nombre:String): String
    insertUserProject(identificacion:Int, nombreProyecto:String):String
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
  activeUser(identificacion:10011)
}

mutation{
 deleteProject(nombre:"Matsoft")
}

*/

module.exports = typeDefs;
