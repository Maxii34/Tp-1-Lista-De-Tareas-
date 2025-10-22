import { Router } from "express";
import { borrarTareas, crearTarea, listarTareas, obtenerTareas } from "../controllers/producto.controler.js";
/*  GET, POST, PATH, PUT, DELETE. */

const router = Router();

router.route('/').post(crearTarea).get(listarTareas)
router.route('/:id').get(obtenerTareas).delete(borrarTareas)

export default router;