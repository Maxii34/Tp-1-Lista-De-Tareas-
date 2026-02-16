import jwt from "jsonwebtoken";

const generarjwt = (id) => {
    if (!id) {
        throw new Error("No se puede generar el token sin el id");
    }
    if (!process.env.SECRETA_JWT) {
        throw new Error("La clave secreta JWT no está definida");
    }

    try {
        const payload = { id };
        const token = jwt.sign(payload, process.env.SECRETA_JWT, { expiresIn: "1h" });
        return token;
    } catch (err) {
        console.error(err);
        throw new Error("Error al generar el token");
    }
}

export default generarjwt;