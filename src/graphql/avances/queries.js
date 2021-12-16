import { gql } from '@apollo/client';

const GET_AVANCES = gql `
query Usuarios {
    Avances {
      _id
      fecha
      descripcion
      proyecto {
        nombre
      }
      creadoPor {
        identificacion
      }
    }
  } 

`;

const GET_AVANCE = gql `
query Avance($id: String!) {
  Avance(_id: $id) {
    _id
    fecha
      descripcion
      proyecto {
        nombre
      }
      creadoPor {
        identificacion
      }
  }
}

`;


export {GET_AVANCES, GET_AVANCE } ;