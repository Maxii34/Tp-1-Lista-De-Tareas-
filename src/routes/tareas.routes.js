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
  filtrarTareas,
} from "../controllers/tareas.controler.js";

const router = Router();

// Rutas para la raíz "/"
router
  .route("/")
  .get(listarTareas)
  .post(validarToken, validarTareas, crearTarea);

// Ruta para filtros 
router.get("/buscar", filtrarTareas); 

// Rutas con ID
router
  .route("/:id")
  .get(validarIDTareas, obtenerTareas)
  .put(validarToken, validarIDTareas, validarTareas, editarTarea)
  .delete(validarToken, validarIDTareas, borrarTareas);

export default router;