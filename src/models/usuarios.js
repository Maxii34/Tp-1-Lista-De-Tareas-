import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre electronico es obligatorio"],
      trim: true,
      minLength: [3, "El nombre es demaciado corto, minime 3 caracteres."],
      maxLength: [25, "El nombre es demaciado largo, maximo 25 caracteres. "],
    },

    email: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Por favor, ingresa un correo electrónico válido",
      ],
    },

    password: {
      type: String,
      required: [true, "La constraseña es un campo obligatorio"],
      minLength: [8, "El passord es demaciado corto, minimo 8 Caracteres"],
      maxLength: [50, "El passord es demaciado largo, maximo 50 Caracteres"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "La contraseña debe tener al menos una mayúscula, una minúscula y un número",
      ],
    },

    rol: {
      type: String,
      required: true,
      enum: {
        values: ["admin", "usuario"],
        message: "{VALUE} no es un rol válido",
      },
      default: "usuario",
    },
  },
  {
    timestamps: true,
  },
);

usuarioSchema.index({ email: 1 });

/* Encriptar la contraseña antes de guardar */
usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/* Método para comparar contraseña (login) */
usuarioSchema.methods.compararPassword = async function (passwordIngresada) {
  return await bcrypt.compare(passwordIngresada, this.password);
};

/* Ocultar password cuando se envía  los datos al usuario */
usuarioSchema.methods.toJSON = function () {
  const usuario = this.toObject();
  delete usuario.password;
  delete usuario.__v;
  return usuario;
};

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
