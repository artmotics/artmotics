// Configuracion del servidor
import express from "express";
import cors from "cors";
import {ApolloServer} from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db";
import {typeDefs} from "./graphql/types"
import { resolvers } from "./graphql/resolvers";

dotenv.config(); // para que nos deje usar variables de entorno en toda la aplicación

// En esta linea de codigo definimos el servidor de GraphQL
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

const app = express();// Definimos la aplicacion de express
app.use(express.json());// Para que los reques entren y salgan de tipo JSON
app.use(cors());// Para poder hacer reques de muchos origenes

// Para poner a correr una aplicacion de express es decir para poner a correr el servidor
app.listen({ port: process.env.PORT || 4000 }), async () => {
    await conectarBD(); // para conectarnos a la base de datos
    await server.start();
    server.applyMiddleware({ app })// esto es para prender el servidor de apollo y que use los mismo middleware de express
    console.log("Servidor Listo")
}