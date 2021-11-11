import { Schema, model } from "mongoose";

const userShema = new Schema({
    correo:{
        type:String,
        required:true,
    },
    identificacion:{
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
});

const UserModel = model("User", userShema);

export {UserModel};