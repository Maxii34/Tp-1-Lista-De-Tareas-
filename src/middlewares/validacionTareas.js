import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionTareas = [
  body("titulo")
    .trim()
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isLength({ min: 5, max: 25 })
    .withMessage("El título debe tener entre 5 y 25 caracteres"),
  body("descripcion")
    .trim()
    .notEmpty()
    .withMessage("La descripción es obligatoria")
    .isLength({ min: 5, max: 100 })
    .withMessage("La descripción debe tener entre 5 y 100 caracteres"),
  body("estado")
    .trim()
    .notEmpty()
    .withMessage("El estado es obligatorio")
    .isIn(["Pendiente", "En Progreso", "Completada", "Cancelada"])
    .withMessage(
      "El estado debe ser 'Pendiente', 'En Progreso', 'Completada' o 'Cancelada'"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];
export default validacionTareas;
