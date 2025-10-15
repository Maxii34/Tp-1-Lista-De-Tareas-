import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

//Tomar un puerto
//Configurar los middlewares
//Usar o configurar las rutas

export default class Server {
  constructor() {
    //se invoca express y se lo guarda en la propiedad app.
    this.app = express();
    //Se usa la variable de entorno port.
    this.port = process.env.PORT || 3001;
    //llama, ejecuta el metodo middlewares.
    this.middlewares();
    this.routes();
  }
  //Se crea un metodo
  middlewares() {
    //app usa el middleweres cords. / Permite conesiones remotas.
    this.app.use(cors());
    //permite interpretar los datos que llegen en la solicitud en formato json.
    this.app.use(express.json());
    //nos ofrese datos extras en la terminal.
    this.app.use(morgan("dev"));
    //Configurar un archivo estatico.

    const __dirname = dirname(fileURLToPath(import.meta.url));
    this.app.use(express.static(__dirname + "/../../public"));
    console.log(__dirname);
    console.log(__dirname + "/../../public");
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(`El servidor se esta ejecutando en: http://localhost:${this.port}`)
    );
  }
  routes() {}
}
