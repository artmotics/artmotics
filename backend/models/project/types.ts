import {gql} from 'apollo-server-express';

const typeProject = gql`

    type Objetivo{
        _id:ID!
        descripcion:String!
        tipo: Enum_TipoObjetivo         
    }
    input crearObjetivo{
        descripcion:String!
        tipo: Enum_TipoObjetivo         
    }
    type Proyecto {
        _id:ID!
        nombre: String!
        presupuesto:Float!
        fechaInicio: Date!
        fechaFin:Date!
        estado: Enum_EstadoProyecto
        fase: Enum_FaseProyecto
        lider: Usuario
        objetivo:Objetivo
    }  
    type Query {
        Proyectos: [Proyecto]
    }

    type Mutation{
        crearProyecto(
            nombre: String!
            presupuesto:Float!
            fechaInicio: Date!
            fechaFin:Date!
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            lider: String!
            objetivo:[crearObjetivo]   
        ) :Proyecto
    }
`;
export{typeProject};