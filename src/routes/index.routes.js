import { Router } from "express";
import tareasRoutes from "./tareas.routes.js";
import usuarioRoutes from "./usuario.routes.js";

const router = Router();

router.use("/tareas", tareasRoutes);

router.use("/usuarios", usuarioRoutes);

export default router;
