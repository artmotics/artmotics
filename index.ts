import conectarBD from "./db/db";
import {UserModel} from "./models/users";

const main = async ()=>{
   await conectarBD();

   // Crear Usuarios
//    await UserModel.create({
//        correo:"kevin@gmail.com",
//        identificacion:"1000806692",
//        nombre:"Kevin",
//        apellido:"Guevara",
//    }).then((u)=>{
//        console.log("usuario creado",u);
//     }).catch((e)=>{
//         console.error("error creando el usuario",e);
//     });
 await UserModel.find()
 .then((u)=>{console.log("usuarios => ",u);
 })
 .catch((e)=>{
     console.error("error obteniendo usuarios",e);
 })

};
main();