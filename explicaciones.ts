// a aqui vamos a hacer todas las conecciones a nuestra base de datos
import conectarBD from "./db/db";
import {
  Enum_EstadoUsuario,
  Enum_Rol,
  Enum_TipoObjetivo,
} from "./models/enums";
import { ObjectiveModel } from "./models/objetive";
import { ProjectModel } from "./models/project";
import { UserModel } from "./models/user"; // Se exporta con llaves para que el nombre no pueda ser cambiado sino que sea estrictamente ese nombr ey no genere confusion

// METODOLOGÍA ONE TO MANY #1
const crearProyectosConObjetivos = async () => {
    const usuarioInicial = await UserModel.create({
      nombre: "Jesus",
      apellido: "Barajas",
      correo: "jdbarajass@gmail.com",
      identificacion: "1234",
      rol: Enum_Rol.administrador,
      estado: Enum_EstadoUsuario.autorizado,
    });

    const proyectoCreado = await ProjectModel.create({
      nombre: "Proyecto Mision TIC",
      fechaInicio: new Date("2021/12/24"),
      fechaFin: new Date("2022/12/24"),
      presupuesto: 12000000,
      lider: usuarioInicial._id,
    });
    const objetivoGeneral = await ObjectiveModel.create({
      descripcion: "Este es el objetivo general",
      tipo: Enum_TipoObjetivo.general,
      proyecto: proyectoCreado._id,
    });
    const objetivoEspecifico1 = await ObjectiveModel.create({
      descripcion: "Este es el objetivo especifico 1",
      tipo: Enum_TipoObjetivo.especifico,
      proyecto: proyectoCreado._id,
    });
    const objetivoEspecifico2 = await ObjectiveModel.create({
      descripcion: "Este es el objetivo especifico 2",
      tipo: Enum_TipoObjetivo.especifico,
      proyecto: proyectoCreado._id,
    });
}

const consultaProyectoConObjetivos = async () => {
  //Vamos a consultar el proyecto y que debajo vengan los objetivos
  const proyecto = await ProjectModel.findOne({
    _id: "Id del proyecto que quiero ver en consola",
  });
  console.log("El proyecto que encontre fue", proyecto);
  // PARA CONSULTAR LOS OBJETIVOS
  const objetivos = await ObjectiveModel.find({ project: "id del proyecto" });
  console.log("Los objetivos del proyecto son: ", objetivos);
  const proyectoConObjetivos = { ...proyecto, obetivos: objetivos };
  console.log("El proyecto con objetivo es:", proyectoConObjetivos);
}

const main = async () => {
  await conectarBD();
 
};

main();

// estas funciones dentro del create son una promesa es decir son funciones que debo esparar a que se termine de ejecutar y por eso se coloca el await
// Si intento crear un usuario con las mismas caracteristicas arrojará un error
// la promesa es que quiero hacer despues de que algo se cumpla... el await sirve para que el programa no se trabe mientras espera una respuesta... pero si coloco el const Usuario = await UserModel... y lo que sigue entonces lo que hace es esperar la respuesta y no puede hacer nada más
// PARA HACER EL CRUD DE USUARIOS
/*   await UserModel.create({
    correo: "jdbarajassbarajas@gmail.com",
    identificacion: "1032464724",
    apellido: "Barajas",
    nombre: "Jose",
    rol: Enum_Rol.administrador,
  })
    .then((u) => {
      console.log("Usuario creado", u);
    })
    .catch((e) => {
      console.error("Error creando el usuariuo", e);
    }); */

// OBTENER USUARIOS
//Como hacer consultas... Obtener los usuarios
/*   await UserModel.find()
    .then((u) => {
      console.log("Usuarios", u);
    })
    .catch((e) => {
      console.error("Error obteniendo los usuarios",e);
    }); */

/*   await UserModel.findOne({ identificacion: "1032464724" })
    .then((u) => {
      console.log("Usuario Encontrado", u);
    })
    .catch((e) => {
      console.error("Usuario no encontrado", e);
    }); */

// EDITAR UN USUARIO
/*   await UserModel.findOneAndUpdate(
    { identificacion: "1032464724" },
    {
      // este codigo lo que hace es actulizar un documento en al coleccion en la BD
      nombre: "Jose De Jesus",
      apellido: "Barajas Sotelo",
    }
  )
    .then((u) => {
      console.log("Usuario actulizado", u);
    })
    .catch((e) => {
      console.error("Error actualizando", e);
    }); */
// ELIMINAR UN USUARIO
/*   await UserModel.findByIdAndDelete({ identificacion: "1032464724" })
    .then((u) => {
      console.log("Usuario eliminado con exito", u);
    })
    .catch((e) => {
      console.error("Usuario No eliminado ERROR", e);
    }); */

/*   ProjectModel.create({
    nombre: "proyecto1",
    presupuesto:120,
    fechaInicio: Date.now(),// coloca la fecha de hoy
    fechaFin: new Date("2022/11/10"),//formato año mes día
    //lider:"id de mongo"
    // objetivos:["numero del objetivo(numero dado por mongo ID) con el que se va a relacionar",""]
  }) */

/*   const objet = await ObjectiveModel.create({
    descripcion: "Este es el objetivo especifico",
    tipo: Enum_TipoObjetivo.especifico,
  }); */

/* const proyecto = await ProjectModel.find({
    nombre: "Nombre del proyecto",
  }).populate("lider").populate("objetivos");// con esta linea de codigo no solo traigo la informacion del proyecto sino tambien la informacion del lider
  console.log("El proyecto es: ", JSON.stringify(proyecto)); */
