import mongoose from "mongoose";
import { ProjectModel } from "../project/project.js";
import { UserModel } from "../user/users.js";

const { Schema, model } = mongoose;

// interface Advance {
//     fecha: Date;
//     descripcion: string;
//     observaciones: [string];
//     proyecto:Schema.Types.ObjectId;
//     creadoPor: Schema.Types.ObjectId;
// }

const advanceSchema = new Schema({
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    observaciones:[
        {
        type:String,
        },
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,        
        required:true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true,
    },
});

const AdvanceModel = model ('Advance',advanceSchema,'advances');
export {AdvanceModel};