import {gql} from 'apollo-server-express';

const typeAdvance = gql`
    type Avance{
        _id:ID!
        fecha:Date!
        descripcion:String!
        observaciones:[String]
        proyecto:Proyecto!
        creadoPor:Usuario!
    }
    type Query {
        Avance: [Avance]
    }
    type Mutation{
        crearAvance(
            fecha:Date!
            descripcion:String!
            proyecto:String!
            creadoPor:String!  
        ) :Avance
    }

`;
export {typeAdvance};