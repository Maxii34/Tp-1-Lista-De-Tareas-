# Backend de Lista de Tareas

¡Bienvenido al backend de la aplicación de Lista de Tareas! Este proyecto proporciona la API necesaria para gestionar tareas, permitiendo a los usuarios crear, leer, actualizar y eliminar tareas de manera eficiente.

## Descripción

Este backend está diseñado para ser robusto y escalable, utilizando tecnologías modernas de JavaScript. La principal funcionalidad es ofrecer un conjunto de endpoints para un CRUD (Crear, Leer, Actualizar, Eliminar) de tareas, gestionando la información en una base de datos MongoDB.

[Link Del proyecto: Aqui 💻](https://listadetareasmax.netlify.app/tareas) 
## Autor

- **Maximiliano Ordoñez**

## Características

- **Crear Tareas**: Añade nuevas tareas a la lista.
- **Listar Tareas**: Obtiene todas las tareas existentes.
- **Obtener Tarea por ID**: Busca una tarea específica por su identificador.
- **Editar Tarea**: Actualiza los detalles de una tarea.
- **Eliminar Tarea**: Borra una tarea de la lista.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL para almacenar las tareas.
- **Mongoose**: ODM para modelar los datos de la aplicación.
- **Cors**: Middleware para habilitar el Cross-Origin Resource Sharing.
- **Morgan**: Middleware para el logging de solicitudes HTTP.

## Endpoints de la API

A continuación se detallan los endpoints disponibles en esta API:

- `POST /`: Crea una nueva tarea.
- `GET /`: Obtiene la lista de todas las tareas.
- `GET /:id`: Obtiene una tarea por su ID.
- `PUT /:id`: Actualiza una tarea por su ID.
- `DELETE /:id`: Elimina una tarea por su ID.

## Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### Pre-requisitos

- **Node.js**: Asegúrate de tener Node.js instalado.
- **MongoDB**: Necesitas una instancia de MongoDB en ejecución.

### Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/backend-lista-de-tareas.git
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto y añade la siguiente variable:
   ```
   MONGODB_URI=tu_uri_de_mongodb
   ```

### Ejecución

- **Modo de Desarrollo**:
  ```bash
  npm run dev
  ```

- **Modo de Producción**:
  ```bash
  npm start
  ```

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
.
├───node_modules
├───public
│   └───index.html
└───src
    ├───controllers
    │   └───producto.controler.js
    ├───models
    │   └───producto.js
    ├───routes
    │   ├───index.routes.js
    │   └───productos.routes.js
    └───server
        ├───config.js
        └───dbConfig.js
├───.gitignore
├───index.js
├───package-lock.json
├───package.json
├───README.md
├───vercel.json
```

- **`src/controllers`**: Lógica para gestionar las tareas.
- **`src/models`**: Define el esquema de la base de datos para las tareas.
- **`src/routes`**: Gestiona las rutas de la API.
- **`src/server`**: Contiene la configuración del servidor y la base de datos.

## Licencia

Este proyecto está bajo la licencia ISC.
