import { Router } from "express";
import { crearProducto, prueba } from "../controllers/producto.controler.js";
/*  GET, POST, PATH, PUT, DELETE. */

const router = Router();

router.route('/test').get(prueba)
router.route('/').post(crearProducto)

export default router;