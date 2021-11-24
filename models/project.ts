import { Schema, model } from "mongoose";
import { Enum_Estadoproyecto, Enum_FaseProyecto } from "./enums";
import {UserModel} from "./user"
// este archivo es para modelar el proyecto
interface Proyecto {
  // si queremos que tenga un tipo entonces definifmos interface
  // en type script no existe float int integer double sino solo el tipo number
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_Estadoproyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
}
const projectSchema = new Schema<Proyecto>({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: Enum_Estadoproyecto,
    dafault: Enum_Estadoproyecto.inactivo,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.nula,
  },
  //Vamos a relacionar lider con usuarios
  lider: {
    type: Schema.Types.ObjectId,
      required: true,
    ref: UserModel,
  },
});
// como definimos el esquema tambien debo definir el modelo
const ProjectModel = model("Proyecto", projectSchema);
export { ProjectModel };
