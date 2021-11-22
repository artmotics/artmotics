import {gql} from 'apollo-server-express';

const typeUsers = gql`

    scalar Date

    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }
    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }


    type Usuario {
        _id:ID!
        nombre: String!
        apellido:String!
        identificacion:String!
        correo:String!
        rol : Enum_Rol!
        estado: Enum_EstadoUsuario
    }
    type Query {
        Usuarios: [Usuario]
        Usuario(_id:String):Usuario
    }

    type Mutation{
        crearUsuario(
            nombre: String!
            apellido:String!
            identificacion:String!
            correo:String!
            rol : Enum_Rol!
            estado: Enum_EstadoUsuario
        ):Usuario

        eliminarUsuario(
            _id:String
            correo:String
        ):Usuario

        editarUsuario(
            _id:String!
            nombre: String!
            apellido:String!
            identificacion:String!
            correo:String!
            rol : Enum_Rol!
            estado: Enum_EstadoUsuario
        ) :Usuario

    
    }
`;
export{typeUsers};