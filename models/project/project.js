// import {Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from "../enums/enums.js";
import mongoose from 'mongoose';
import { ObjectiveModel } from "../objetive.js";
import { UserModel } from "../user/users.js";

const { Schema, model } = mongoose;

// interface Proyecto {
//     nombre:string;
//     presupuesto: number;
//     fechaInicio: Date;
//     fechaFin : Date;
//     estado : Enum_EstadoProyecto,
//     fase : Enum_FaseProyecto,
//     lider : Schema.Types.ObjectId,
//     objetivo : Schema.Types.ObjectId,     
// }

const projectSchema = new Schema({
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
        enum: ["ACTIVO","INACTIVO"],
        default:"INACTIVO",
    },
    fase:{
        type:String,
        enum:["INICIADO","DESARROLLO","TERMINADO","NULA"],
        default:"NULA",
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
            enum: ["GENERAL","ESPECIFICO"],
            required: true,
          },
        },
      ],    
},
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
});

projectSchema.virtual("avance",{
    ref: "Advance",
    localField: "_id",
    foreignField: "proyecto",
});

const ProjectModel = model('Proyecto',projectSchema,'projects');

export {ProjectModel};
    // type:Schema.Types.ObjectId,
        // required:true,
        // ref:ObjectiveModel,