import { Router } from "express";
import validarTareas from "../middlewares/validacionTareas.js";
import validarIDTareas from "../middlewares/validacionIDTareas.js";
import validarToken from "../middlewares/validarToken.js";
import {
  borrarTareas,
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTareas,
} from "../controllers/tareas.controler.js";

const router = Router();

router
  .route("/")
  .post([validarToken, validarTareas], crearTarea)
  .get(listarTareas);
router
  .route("/:id")
  .get(validarIDTareas, obtenerTareas)
  .put([validarToken, validarIDTareas, validarTareas], editarTarea)
  .delete([validarToken, validarIDTareas], borrarTareas);

export default router;
