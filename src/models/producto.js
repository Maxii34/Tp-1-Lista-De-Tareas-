import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 25,
      unique: true
    },
    descripcion: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 100,
      unique: true
    }
  },
  {
    timestamps: true 
  }
);
const tarea = mongoose.model('Producto', tareaSchema)

export default tarea;