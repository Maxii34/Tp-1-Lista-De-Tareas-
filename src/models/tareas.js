import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: [true, "El título es obligatorio"],
      trim: true,
      minLength: [5, "Título demasiado corto, mínimo 5 caracteres"],
      maxLength: [50, "Título demasiado largo, máximo 50 caracteres"], 
    },

    descripcion: {
      type: String,
      required: [true, "La descripción es obligatoria"],
      trim: true,
      minLength: [10, "Descripción demasiado corta, mínimo 10 caracteres"],
      maxLength: [500, "Descripción demasiado larga, máximo 500 caracteres"], 
    },

    estado: {
      type: String,
      required: [true, "El estado es obligatorio"],
      enum: {
        values: [
          "pendiente",
          "en_proceso",
          "bloqueada",
          "completada",
          "cancelada",
        ],
        message: "{VALUE} no es un estado válido",
      },
      default: "pendiente",
    },

    prioridad: {
      type: String,
      enum: {
        values: ["baja", "media", "alta"],
        message: "{VALUE} no es una prioridad válida",
      },
      default: "media",
    },

    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      //required: [true, "La tarea debe estar asociada a un usuario"],
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

tareaSchema.index({ usuario: 1, estado: 1 });

const Tarea = mongoose.model("Tarea", tareaSchema);

export default Tarea;
