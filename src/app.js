//este archivo sera para configurar la aplicacion de express
import express from "express";
import config from "./config";
import productosRouter from "./routes/productos.routes";

const app = express();

//settings
app.set('port', config.port); //servira para configurar el puerto

//middlewares
app.use(express.json()); //servira para que pueda recibir datos en json
app.use(express.urlencoded({extended:false})); //servira para que tambien reciba datos desde formularios html

//rutas
app.use(productosRouter);

export default app