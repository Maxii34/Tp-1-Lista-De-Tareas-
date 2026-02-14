import jwt from "jsonwebtoken";

const validarToken = (req, res, next) => {
  try {
    // Obtener el header 'authorization' (el estándar)
    const authHeader = req.header("authorization");

    // Verificar si existe y si empieza con la palabra 'Bearer '
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({
          mensaje: "Acceso denegado. Token inexistente o formato inválido",
        });
    }

    // Extraer solo el token (quitamos la palabra "Bearer ")
    const token = authHeader.split(" ")[1];

    // se verificar el token
    const payload = jwt.verify(token, process.env.SECRETA_JWT);

    // Se estrae el id
    req.idUsuario = payload.id;

    next();
  } catch (error) {
    console.error("Error de validación:", error.message);
    res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};

export default validarToken;
