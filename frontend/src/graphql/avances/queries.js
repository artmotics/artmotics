import { gql } from "@apollo/client";

const GET_AVANCES = gql`
  query Avances {
    Avances {
      fecha
      descripcion
      proyecto {
        nombre
        estado
      }
    }
  }
`;

export { GET_AVANCES };
