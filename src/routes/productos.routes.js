import { Router } from "express";
/*  GET, POST, PATH, PUT, DELETE. */

const router = Router();

router.route('/').get((req, res)=>{
console.log("Desde el controlador de puebas")
res.send('Desde el controlador de puebas')
})

export default router;