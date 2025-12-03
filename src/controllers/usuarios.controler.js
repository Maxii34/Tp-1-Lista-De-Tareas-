import usuarios from "../models/usuarios.js";
import generarjwt from "../middlewares/generarJWT.js";
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
    res.status(201).json({
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

export const iniciarSesion = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    //Verificar si el email y la contraseña existen
    if (!email || !contraseña) {
      return res
        .status(400)
        .json({ mensaje: "Email y contraseña son requeridos" });
    }
    const usuarioEncontrado = await usuarios.findOne({ email });
    //Verificar si el usuario existe
    if (!usuarioEncontrado) {
      return res.status(404).json({ mensaje: "Credenciales incorrectas" });
    }
    //Comparar la contraseña ingresada con la almacenada
    const contraseñaValida = await bcrypt.compare(
      contraseña,
      usuarioEncontrado.contraseña
    );
    //Verificar si la contraseña es correcta
    if (!contraseñaValida) {
      return res.status(404).json({ mensaje: "Credenciales incorrectas" });
    }
    //Generar Token jwt
    const token = generarjwt(usuarioEncontrado._id);
    res.status(200).json({
      mensaje: "Inicio de sesión exitoso",
      token,
      usuario: {
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
        tipo: usuarioEncontrado.tipo,
        id: usuarioEncontrado._id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al iniciar sesión" });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuarioObtenido = await usuarios.findById(req.Usuario);
    if (!usuarioObtenido) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json(usuarioObtenido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el usuario" });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    console.log(req.params.id);
    const usuarioBuscado = await usuarios.findById(req.params.id);

    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Evitar que se borre el único admin
    if (usuarioBuscado.tipo === "admin") {
      const adminCount = await usuarios.countDocuments({ tipo: "admin" });
      if (adminCount === 1) {
        return res
          .status(400)
          .json({ mensaje: "No se puede borrar el único administrador" });
      }
    }

    // Ahora sí borrar
    await usuarios.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Usuario borrado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar el usuario" });
  }
};

export const editarUsuario = async (req, res) => {};
