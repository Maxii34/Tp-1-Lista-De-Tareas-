import { param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionIDTareas = [
    param("id").isMongoId().withMessage("El ID proporcionado debe ser un ID de MongoDB válido"),
    (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionIDTareas;