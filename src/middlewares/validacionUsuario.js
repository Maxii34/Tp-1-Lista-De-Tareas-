import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3, max: 25 })
    .withMessage("El nombre debe tener entre 3 y 25 caracteres"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8, max: 50 }) // Aquí limitas a 50
    .withMessage("La contraseña debe tener entre 8 y 50 caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número",
    ),

  body("rol")
    .optional()
    .isIn(["admin", "usuario"])
    .withMessage("El rol proporcionado no es válido"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
