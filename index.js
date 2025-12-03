import Server from "./src/server/config.js";
import router from "./src/routes/index.routes.js";


const server = new Server();
//agregar las rutas
server.app.use('/api', router)

//http://localhost:3000/api/productos/

server.listen();

