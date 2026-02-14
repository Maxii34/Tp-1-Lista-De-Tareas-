import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const estadosValidos = [
  "pendiente",
  "en_proceso",
  "bloqueada",
  "completada",
  "cancelada",
];
const prioridadesValidas = ["baja", "media", "alta"];

const validacionTarea = [
  body("titulo")
    .trim()
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isLength({ min: 5, max: 50 })
    .withMessage("El título debe tener entre 5 y 50 caracteres"),

  body("descripcion")
    .trim()
    .notEmpty()
    .withMessage("La descripción es obligatoria")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripción debe tener entre 10 y 500 caracteres"),

  body("estado")
    .optional()
    .toLowerCase()
    .isIn(estadosValidos)
    .withMessage(
      `El estado debe ser uno de los siguientes: ${estadosValidos.join(", ")}`,
    ),

  body("prioridad")
    .optional()
    .toLowerCase()
    .isIn(prioridadesValidas)
    .withMessage("La prioridad debe ser baja, media o alta"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionTarea;
