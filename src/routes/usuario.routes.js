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
import validacionTareas from "../middlewares/validacionTareas.js";
import validacionIDUsuario from "../middlewares/validacionIDUsuario.js";

const router = Router();

router.route("/").post(validacionTareas, crearUsuario).get(validarToken, listarUsuarios);
router.route("/login").post(validacionTareas, iniciarSesion);

// Rutas con ID
router
  .route("/:id")
  .get([validarToken, validacionIDUsuario ], obtenerUsuario)
  .delete([validarToken, validacionIDUsuario ], borrarUsuario)
  .put([validarToken, validacionIDUsuario ], editarUsuario)

export default router;
