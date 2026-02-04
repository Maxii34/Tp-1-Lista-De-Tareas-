import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 25,
    },

    descripcion: {
      type: String,
      required: true,
      trim: true,
      maxLength: 500,
    },

    estado: {
      type: String,
      enum: ["pendiente", "en_proceso", "bloqueada", "completada", "cancelada"],
      default: "pendiente",
    },

    prioridad: {
      type: String,
      enum: ["baja", "media", "alta"],
      default: "media",
    },

    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

tareaSchema.index({ usuario: 1, estado: 1 });

const Tarea = mongoose.model("Tarea", tareaSchema);

export default Tarea;
