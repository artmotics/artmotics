import { Schema, model } from "mongoose";
import {Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from "./enums";
import { ObjectiveModel } from "./objetive";
import { UserModel } from "./users";

interface Proyecto {
    nombre:string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin : Date;
    estado : Enum_EstadoProyecto,
    fase : Enum_FaseProyecto,
    lider : Schema.Types.ObjectId,
    objetivo : Schema.Types.ObjectId,     
}

const projectShema = new Schema<Proyecto>({
    nombre:{
        type:String,
        required:true,  
        unique:true,      
    },
    presupuesto:{
        type:Number,
        required:true,
    },
    fechaInicio:{
        type:Date,
        required:true,
    },
    fechaFin:{
        type:Date,
        required:true,
    },
    estado:{
        type:String,
        enum: Enum_EstadoProyecto,
        default:Enum_EstadoProyecto.INACTIVO,
    },
    fase:{
        type:String,
        enum:Enum_FaseProyecto,
        default:Enum_FaseProyecto.NULA,
    },
    lider:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:UserModel,
    },  
    objetivo:[
        {
          descripcion: {
            type: String,
            required: true,
          },
          tipo: {
            type: String,
            enum: Enum_TipoObjetivo,
            required: true,
          },
        },
      ],    
});

const ProjectModel = model('Proyecto',projectShema,'projects');

export {ProjectModel};
    // type:Schema.Types.ObjectId,
        // required:true,
        // ref:ObjectiveModel,