// modelo de usuarios y siempre en mongoose para poderme comunicar con una coleccion necesito el modelo y el esquema un modelo es la representacion en codigo de la base de datos o de la tabla en nosotros tenemos en la base de datos, en estre caso de la coleccion que tenemos en mongo... los _id mongo los hace solo, no debemos colocarlo
import { Schema, model } from "mongoose";
import { Enum_Rol } from "./enums";
interface User {// Estos string van con minuscula
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_Rol;
}

const userSchema = new Schema<User>({
    correo: {
      type: String,
      required: true,
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
});
// para usar todo este esquema lo que necesito es definir un modelo, y definir el modelo es el objeto que va a ser un usuario que me va a permitir a mi comunicarme con mi base de datos me permite usar un monton de funciones de mongoose para hacer el CRUD completo
const UserModel = model("user", userSchema);
export { UserModel };
