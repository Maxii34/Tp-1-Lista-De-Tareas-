import usuarios from "../models/usuarios.js";
import bcrypt from "bcryptjs";

export const crearUsuario = async (req, res) => {
  try {
    const { tipo } = req.body;
    const usuarioExiste = await usuarios.findOne({ email: req.body.email });
    if (usuarioExiste) {
      return res.status(400).json({ mensaje: "El usuario ya existe" });
    }
    if (tipo === "admin") {
      const adminExiste = await usuarios.findOne({ tipo: "admin" });
      if (adminExiste) {
        return res.status(400).json({ mensaje: "Ya existe un administrador" });
      }
    }
    const saltos = await bcrypt.genSalt(10);
    const contraseñaEncriptada = await bcrypt.hash(req.body.contraseña, saltos);
    req.body.contraseña = contraseñaEncriptada;

    const nuevoUsuario = new usuarios(req.body);
    await nuevoUsuario.save();
    res
      .status(201)
      .json({
        mensaje:
          tipo === "admin"
            ? "Administrador creado correctamente"
            : "Usuario creado correctamente",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuariosListado = await usuarios.find(); 
    res.status(200).json(usuariosListado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al listar los usuarios" });
  }
};

export const obtenerUsuario = async (req, res) => {};

export const editarUsuario = async (req, res) => {};

export const borrarUsuario = async (req, res) => {};
