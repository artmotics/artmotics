import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "./enums";
import { ProjectModel } from "./project";
import { UserModel } from "./users";

interface Inscripcion{
    estado:Enum_EstadoInscripcion;
    fechaIngreso:Date;
    fechaEgreso:Date;
    proyecto:Schema.Types.ObjectId;
    estudiante:Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscripcion>({
    estado:{
        type:String,
        enum:Enum_EstadoInscripcion,
        default:Enum_EstadoInscripcion.aceptada,
        required:true,
    },
    fechaIngreso:{
        type:Date,
        required:true,
    },
    fechaEgreso:{
        type:Date,
        required:true,
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        require:true,
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        require:true,
    },
});

const InscriptionModel = model ('Inscripcion',inscriptionSchema,'inscriptions')