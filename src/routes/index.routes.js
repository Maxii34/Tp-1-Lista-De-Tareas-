import { Router } from "express";
import tareasRoutes from "./tareas.routes";

const router = Router();

router.use('/productos', tareasRoutes)

export default router;