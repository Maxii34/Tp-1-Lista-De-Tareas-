import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema(
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
const Producto = mongoose.model('Producto', productoSchema)

export default Producto;