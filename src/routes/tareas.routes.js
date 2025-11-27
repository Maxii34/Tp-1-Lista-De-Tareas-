import { Router } from "express";
import { borrarTareas, crearTarea, editarTarea, listarTareas, obtenerTareas } from "../controllers/tareas.controler.js";
/*  GET, POST, PATH, PUT, DELETE. */

const router = Router();

router.route('/').post(crearTarea).get(listarTareas)
router.route('/:id').get(obtenerTareas).put(editarTarea).delete(borrarTareas)

export default router;