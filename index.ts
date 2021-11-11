import conectarBD from "./db/db";
import {UserModel} from "./models/users";
import {Enum_Rol} from "./models/enums";

const main = async ()=>{
   await conectarBD();

   // Crear Usuarios
//    await UserModel.create({
//        correo:"David@gmail.com",
//        identificacion:"2966080001",
//        nombre:"David",
//        apellido:"Guevara",
//        rol:Enum_Rol.administrador,
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