import { Router } from "express";
import {  crearUsuario, listarUsuarios } from "../controllers/usuarios.controler.js";

const router = Router();

router.route('/').post(crearUsuario).get(listarUsuarios)

export default router;