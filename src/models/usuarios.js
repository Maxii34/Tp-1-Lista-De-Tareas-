import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 25,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      validate: {
        validator: function (v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&#.]{8,}$/.test(
            v
          );
        },
      },
    },
    rol: {
      type: String,
      enum: ["admin", "usuario"],
      default: "usuario",
    },
  },
  {
    timestamps: true,
  }
);

usuarioSchema.methods.toJSON = function () {
  const usuario = this.toObject();
  delete usuario.password;
  return usuario;
};

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
