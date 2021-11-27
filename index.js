const ProjectModel = require ('./models/proyectoModel');
const express = require('express');
const {gql, ApolloServer} = require ('apollo-server-express');
const { request, response } = require('express');

const typeDefs=gql`
  type user{
    nombre: String
    identificacion: Int
    correo: String
    estado: String
    perfil: String
  }
  type Query{
    usuarios: [user]
    usuario(identificacion: Int): user
  }

`

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
    usuario: (parent, args, context, info)=>{
      //metodo find no es  un metodo de mongo, es js
      return listUsuarios.find(user=> user.identificacion === args.identificacion)
    }
  }
}

const iniciarServidor = async () => {
  const api = express()
  const apollo = new ApolloServer(
    {
      typeDefs,
      resolvers
    }
  );
  await apollo.start()
  apollo.applyMiddleware({app:api})
  api.use((request, response)=>{
    response.send ("404")
  })
  api.listen('8090', ()=>console.log('OnLine')
  )
}

iniciarServidor()
