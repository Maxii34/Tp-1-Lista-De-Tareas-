import Producto from "../models/producto.js";

//Archivo solo para rutas del Crud
export const prueba = (req, res)=>{
console.log("Desde el controlador de puebas")
res.send('Desde el controlador de puebas')
}

export const crearProducto = async (req, res)=>{
try {
// verificar que llegen los datos validados.
//pedir al modelo producto, crear el objeto en la base de datos.
console.log(req)
const nuevoProducto = new Producto(req.body)
await nuevoProducto.save()
res.status(201).json({mensaje: "Producto creado correctamente"})
} catch (error) {
    console.log(error)
    res.status(500).json({mensaje: "Error al crear el producto" })
}
};