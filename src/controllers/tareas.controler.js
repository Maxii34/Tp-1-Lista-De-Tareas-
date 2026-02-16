import tarea from "../models/tareas.js";

// Crear tarea
export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new tarea({ ...req.body, usuario: req.Usuario });
    await nuevaTarea.save();
    res.status(201).json({ mensaje: "Tarea creada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al crear la tarea" });
  }
};

// Listar tareas
export const listarTareas = async (req, res) => {
  try {
    const tareas = await tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al listar las tareas" });
  }
};

//filtrado de tarea por letras
export const filtrarTareas = async (req, res) => {
  try {
    const { busqueda, estado, prioridad, page = 1, limit = 10 } = req.query;

    const filtros = {
      isDelete: false
    };

    if (estado) filtros.estado = estado;
    if (prioridad) filtros.prioridad = prioridad;

    if (busqueda) {
      filtros.$or = [
        { titulo: { $regex: busqueda, $options: "i" } },
        { descripcion: { $regex: busqueda, $options: "i" } }
      ];
    }

    const tareas = await tarea
      .find(filtros)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al filtrar las tareas" });
  }
};

// Obtener tarea por ID
export const obtenerTareas = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaEncontrada = await tarea.findById(req.params.id);
    if (!tareaEncontrada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    res.status(200).json(tareaEncontrada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener la tarea." });
  }
};

// Editar tarea por id
export const editarTarea = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaActualizada = await tarea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tareaActualizada) {
      return res.status(404).json({ mensaje: "La tarea no encontrada" });
    }
    res.status(200).json({ mensaje: "La tarea actualizada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar la tarea." });
  }
};

// Borrar tarea por id
export const borrarTareas = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaEncontrada = await tarea.findByIdAndDelete(req.params.id);
    if (!tareaEncontrada) {
      return res.status(404).json({ mensaje: "La tarea no encontrada" });
    }
    res.status(200).json({ mensaje: "La tarea eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar la tarea." });
  }
};

