import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const rolesValidos = ["admin", "usuario"];

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
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener mínimo 8 caracteres")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
    ),

  body("rol")
    .optional()
    .isIn(rolesValidos)
    .withMessage("El rol debe ser 'admin' o 'usuario'"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
