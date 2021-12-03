// import { Enum_EstadoInscripcion } from "../enums/enums.js";
import mongoose from 'mongoose';
import { ProjectModel } from "../project/project.js";
import { UserModel } from "../user/users.js";

const { Schema, model } = mongoose;

// interface Inscripcion{
//     estado:Enum_EstadoInscripcion;
//     fechaIngreso:Date;
//     fechaEgreso:Date;
//     proyecto:Schema.Types.ObjectId;
//     estudiante:Schema.Types.ObjectId;
// }

const inscriptionSchema = new Schema({
    estado:{
        type:String,
        enum:["ACEPTADA","RECHAZADA","PENDIENTE"],
        default:"PENDIENTE",
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
export {InscriptionModel};