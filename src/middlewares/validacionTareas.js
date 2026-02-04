import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const estadosValidos = [
  "pendiente",
  "en_proceso",
  "bloqueada",
  "completada",
  "cancelada"
];

const prioridadesValidas = ["baja", "media", "alta"];

const validacionTareas = [

  body("titulo")
    .optional() 
    .trim()
    .notEmpty()
    .withMessage("El título no puede estar vacío")
    .isLength({ min: 5, max: 50 })
    .withMessage("El título debe tener entre 5 y 50 caracteres"),

  body("descripcion")
    .optional()
    .trim()
    .isLength({ max: 300 })
    .withMessage("La descripción no puede superar los 300 caracteres"),

  body("estado")
    .optional()
    .trim()
    .isIn(estadosValidos)
    .withMessage(
      "El estado debe ser: pendiente, en_progreso, completada o archivada"
    ),

  body("prioridad")
    .optional()
    .trim()
    .isIn(prioridadesValidas)
    .withMessage("La prioridad debe ser: baja, media o alta"),

  body("fechaLimite")
    .optional()
    .isISO8601()
    .withMessage("La fecha límite debe ser una fecha válida")
    .toDate(),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionTareas;
