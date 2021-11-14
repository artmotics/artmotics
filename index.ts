import conectarBD from "./db/db";
import {UserModel} from "./models/users";
import {Enum_Rol} from "./models/enums";
import { ProyectModel } from "./models/project";

const main = async ()=>{
   await conectarBD();

//    ProyectModel.create({
//        nombre:"Proyecto N1",
//        presupuesto:120,
//        fechaInicio: Date.now(),
//        fechaFin: new Date("2022/11/10"),
//        lider:'619073e4ff0631687b7b22e0',
//     })

    // BUSCAR E IMPRIMIR EL PROYECTO N1 JUNTO CON EL LIDER QUE SE RELACIONA CON EL USUARIO
    const proyecto = await ProyectModel.find({nombre:"Proyecto N1"}).populate("lider");
    console.log('El proyecto es:',proyecto);
};
main();

    // CREAR USUARIO
    // await UserModel.create({
    //     correo:"David@gmail.com",
    //     identificacion:"2966080001",
    //     nombre:"David",
    //     apellido:"Guevara",
    //     rol:Enum_Rol.administrador,
    // }).then((u)=>{
    //     console.log("usuario creado",u);
    // }).catch((e)=>{
    //     console.error("error creando el usuario",e);
    // });

    // EDITAR USUARIO
    // await UserModel.findOneAndUpdate(
    //     { correo : "David@gmail.com"},
    //     { nombre : "David"}
    // );

    // Eliminar Usuario 
    // await UserModel.findOneAndDelete (
    //     { correo : "kevin@gmail.com"},
    // );

    // Imprimir / Buscar datos
    //  await UserModel.find() // findOne ({ : " el valor de la x"})
    //  .then((u)=>{console.log("usuarios => ",u);
    //  })
    //  .catch((e)=>{
    //      console.error("error obteniendo usuarios",e);
    //  })
