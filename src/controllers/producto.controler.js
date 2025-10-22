import tarea from "../models/producto.js";

// Archivo solo para rutas del CRUD

// Crear tarea
export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new tarea(req.body);
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
//borrar tarea por id.
export const borrarTareas = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaEncontrada = await tarea.findById(req.params.id);
    if (!tareaEncontrada) {
      return res.status(404).json({ mensaje: "La tarea no encontrada" });
    }
    await tarea.findByIdAndDelete(req.params.id)
    res.status(200).json({ mensaje: "La tarea eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar la tarea." });
  }
};
