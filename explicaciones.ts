import conectarBD from "./db/db";
import {UserModel} from "./models/users";
import {Enum_Rol, Enum_TipoObjetivo} from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectiveModel } from "./models/objetive";

const main = async ()=>{
   await conectarBD();

    

    
};
main();



/*
proyecto: Schema.Types.ObjectId;
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
  }, 
  proyecto: Proyecto  
  */



/*
objetivo : Schema.Types.ObjectId,

 objetivo:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: ObjectiveModel,
    },    

 objetivo:Objetivo

type Objetivo{
    descripcion:String!
    tipo: Enum_TipoObjetivo
    proyecto: Proyecto       
}*/

// BUSCAR E IMPRIMIR EL PROYECTO N1 JUNTO CON EL LIDER QUE SE RELACIONA CON EL USUARIO
    // const proyecto = await ProyectModel.find({nombre:"Proyecto N1"}).populate("lider");
    // console.log('El proyecto es:',proyecto);

    // const proyectos = await ProjectModel.find({_id:'6193a879fd9a94297ec3ab9b'}).populate("lider");
    // console.log("El proyecto encontrado es : ",proyectos);

    // const objetivo = await ObjectiveModel.find({ project: '6193a879fd9a94297ec3ab9b' });
    // console.log("Los objetivos encontrado son : ",objetivo);

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

// CREACION DEL USUARIO, PROYECTO Y OBJETIVOS RELACIONANDOLOS    
    // const usuarioInicial = await UserModel.create({
    //     correo:"David@gmail.com",
    //     identificacion:"2966080001",
    //     nombre:"David",
    //     apellido:"Guevara",
    //     rol:Enum_Rol.administrador,
    // });

    // const proyectoCreado = await ProjectModel.create({
    //    nombre:"Proyecto N1",
    //    presupuesto:120,
    //    fechaInicio: Date.now(),
    //    fechaFin: new Date("2022/11/10"),
    //    lider: usuarioInicial._id,
    // });

    // const objetivoGeneral1 = await ObjectiveModel.create({
    //     descripcion:"Este es un objetivo general",
    //     tipo:Enum_TipoObjetivo.general,
    //     proyecto:proyectoCreado._id,
    // });
    
    // const objetivoEspecifico = await ObjectiveModel.create({
    //     descripcion:"Este es un objetivo especifico",
    //     tipo:Enum_TipoObjetivo.especifico,
    //     proyecto:proyectoCreado._id,
    // });