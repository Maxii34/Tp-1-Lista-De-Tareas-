import { Router } from "express";
import { borrarTareas, crearTarea, editarTarea, listarTareas, obtenerTareas } from "../controllers/tareas.controler.js";
import validarTareas from "../middlewares/validacionTareas.js";
import validarIDTareas from "../middlewares/validacionIDTareas.js";


const router = Router();

router.route('/')
.post(validarTareas, crearTarea)
.get(listarTareas)
router.route('/:id')
.get(validarIDTareas, obtenerTareas)
.put([validarIDTareas ,validarTareas], editarTarea)
.delete(validarIDTareas, borrarTareas)

export default router;