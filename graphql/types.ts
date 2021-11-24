import { gql } from 'apollo-server-express';
const typeDefs = gql`
    type Usuario{
        nombre : String!
    }

    type Query{
        Usuarios:{Usuario}
    }
`;
// nombre : String! = el simbolo ! quiere decir que es requerido ese campo

export {typeDefs}