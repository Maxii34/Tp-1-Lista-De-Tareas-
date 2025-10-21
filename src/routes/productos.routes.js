import { Router } from "express";
import { crearTarea, listarTareas } from "../controllers/producto.controler.js";
/*  GET, POST, PATH, PUT, DELETE. */

const router = Router();

router.route('/').post(crearTarea).get(listarTareas)

export default router;