// a aqui vamos a hacer todas las conecciones a nuestra base de datos
import conectarBD from "./db/db";
import {Enum_Rol} from "./models/enums"
import { UserModel } from "./models/user"; // Se exporta con llaves para que el nombre no pueda ser cambiado sino que sea estrictamente ese nombr ey no genere confusion
const main = async () => {
  await conectarBD();
  // estas funciones dentro del create son una promesa es decir son funciones que debo esparar a que se termine de ejecutar y por eso se coloca el await
  // Si intento crear un usuario con las mismas caracteristicas arrojará un error
  await UserModel.create({
    apellido: "Barajas Sotelo",
    correo: "jdbarajass@gmail.com",
    identificacion: "1032464724",
    nombre: "Jose De Jesus",
    rol: Enum_Rol.administrador,
  })
    .then((u) => {
      console.log("Usuario creado", u);
    })
    .catch((e) => {
      console.error("Error creando el usuariuo", e);
    });

  // Como hacer consultas... Obtener los usuarios
/*   await UserModel.find()
    .then((u) => {
      console.log("Usuarios", u);
    })
    .catch((e) => {
      console.error("Error obteniendo los usuarios",e);
    }); */
};

main();
