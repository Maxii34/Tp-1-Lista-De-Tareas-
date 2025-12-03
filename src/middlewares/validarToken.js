import jwt from "jsonwebtoken";

const validarToken = (req, res, next) => {
    try {
        const token = req.header("x-token");
        //Verificar si el token existe
        if (!token) {
            return res.status(401).json({ mensaje: "Token inexistente" });
        }
        const payload = jwt.verify(token, process.env.SECRETA_JWT);
        //Se extrae el usuario del payload y se agrega al req
        req.Usuario = payload.Usuario;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ mensaje: "Token inválido o inexistente" });
    }
}

export default validarToken;