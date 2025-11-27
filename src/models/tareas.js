import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 25,
      unique: true,
    },
    descripcion: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    estado: {
      type: String,
      required: true,
      enum: ["Pendiente", "En Progreso", "Completada", "Cancelada"],
      default: "Pendiente",
    },
  },
  {
    timestamps: true,
  }
);
const tarea = mongoose.model("Tarea", tareaSchema);

export default tarea;
