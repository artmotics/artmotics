import { Schema, model } from "mongoose";
import { ProjectModel } from "../project/project";
import { UserModel } from "../user/users";

interface Advance {
    fecha: Date;
    descripcion: string;
    observaciones: [string];
    proyecto:Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}

const advanceSchema = new Schema<Advance>({
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

const AdvanceModel = model ('Advance',advanceSchema,'Advances');
export {AdvanceModel};