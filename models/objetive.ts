import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enums";
import { ProjectModel } from "./project";
interface Objective {
  descripcion: string;
  tipo: Enum_TipoObjetivo;
  proyecto: Schema.Types.ObjectId; // Esto es porque basicamente se va a hacer una relacion
}
const objectiveSchema = new Schema<Objective>({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: Enum_TipoObjetivo,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,// esta es la referencia a ProjectModel
  },
});
const ObjectiveModel = model("Objetivo", objectiveSchema);
export { ObjectiveModel };
