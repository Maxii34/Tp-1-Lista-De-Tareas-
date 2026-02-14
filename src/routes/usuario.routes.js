import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  iniciarSesion,
  obtenerUsuario,
  borrarUsuario,
  editarUsuario,
} from "../controllers/usuarios.controler.js";
import validarToken from "../middlewares/validarToken.js";
import validacionIDUsuario from "../middlewares/validacionIDUsuario.js";
import validacionUsuario from "../middlewares/validacionUsuario.js";

const router = Router();

router.route("/").post(validacionUsuario, crearUsuario).get(validarToken, listarUsuarios);
router.route("/login").post(validacionUsuario, iniciarSesion);

// Rutas con ID
router
  .route("/:id")
  .get([validarToken, validacionIDUsuario ], obtenerUsuario)
  .delete([validarToken, validacionIDUsuario ], borrarUsuario)
  .put([validarToken, validacionIDUsuario ], editarUsuario)

export default router;
