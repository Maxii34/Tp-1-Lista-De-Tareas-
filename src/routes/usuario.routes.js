import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  iniciarSesion,
  obtenerUsuario,
  borrarUsuario,
} from "../controllers/usuarios.controler.js";
import validarToken from "../middlewares/validarToken.js";

const router = Router();

router.route("/").post(crearUsuario).get(validarToken, listarUsuarios);
router.route("/login").post(iniciarSesion);

// Rutas con ID
router
  .route("/:id")
  .get(validarToken, obtenerUsuario)
  .delete(validarToken, borrarUsuario);

export default router;
