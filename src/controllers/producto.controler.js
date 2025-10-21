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
