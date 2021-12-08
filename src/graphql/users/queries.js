import {gql} from '@apollo/client';

const GET_USERS = gql`
    query Usuarios {
        Usuarios {
            _id
            nombre
            apellido
            identificacion
            correo
            rol
            estado
        }
    }
`;

const GET_USERS_BY_ID = gql`
    query Usuario ($_id:String!){
        Usuario( _id : $_id ){
            _id
            nombre
            apellido
            identificacion
            correo
            rol
            estado
        }
    }
`;

export {GET_USERS,GET_USERS_BY_ID};