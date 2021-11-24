// modelo de usuarios y siempre en mongoose para poderme comunicar con una coleccion necesito el modelo y el esquema un modelo es la representacion en codigo de la base de datos o de la tabla en nosotros tenemos en la base de datos, en estre caso de la coleccion que tenemos en mongo... los _id mongo los hace solo, no debemos colocarlo
import { Schema, model } from "mongoose";
import { Enum_Rol, Enum_EstadoUsuario } from "./enums";
interface User {
  // Estos string van con minuscula porque son de tipos nativos de typescript y ellos lo colocaron de esa forma
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
}

const userSchema = new Schema<User>({
  // los string de aca son de moongoose y por eso tiene una S mayuscula al principio porque fueron declarados de esa forma
  correo: {
    type: String,
    required: true,
    unique: true, // Indica que si es unico es decir para que no hayan 2 iguales correos electronicos en la base de datos
    validate: {
      // sirve para validar de que al menos este ingresando un correo "valido"
      validator: (email) => {// este codigo lo que me hace es validar si lo que vaya a digitar el usuario corresponde al formato de un email por medio de ese grupo de caraacteres extraño despues del return que se llama expresion regular
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      /*       validator: (email) => {
        if (email.includes("@") && email.includes(".")) {
          return true;
        } else {
          return false;
        }
      },message:"El formato del correo electronico esta malo" */
    },
  },
  identificacion: {
    type: String,
    required: true,
    unique: true, // si es unico lo colocamos
  },
  nombre: {
    type: String,
    required: true,
  },

  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
  estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.pendiente,
  },
}); // el default es para que el usuario que se crea por defecto tenga como estado pendiente
// para usar todo este esquema lo que necesito es definir un modelo, y definir el modelo es el objeto que va a ser un usuario que me va a permitir a mi comunicarme con mi base de datos me permite usar un monton de funciones de mongoose para hacer el CRUD completo
const UserModel = model("User", userSchema); // este model es decir este modelo me va a permitir hacer toda la coneccion a mongo y quien me va a permitir hacer todas las operaciones en nuestr BD (es decir hacer todo el CRUD)
// const UserModel = model("user", userSchema);const UserModel = model("user", userSchema); Basicamente lo que hace esta linea de codigo es crear la coleccion con ese nombre User pero la coloca como lowercase y tambien con una s al final entonces funciona muy bien en ingles pero en español no tanto y si quiero que sea personalizado lo que hago es agregar un tercer parametro con mi nombre personalizado const UserModel = model("user", userSchema, "nombre_presonalizado");
export { UserModel };
