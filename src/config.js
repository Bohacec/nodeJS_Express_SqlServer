//este archivo sera para guardar las variables 
import { config } from "dotenv"
config();

export default{
    port: process.env.PORT, //.env
    user: process.env.USER, //.env
    password: process.env.PASSWORD, //.env
    server: process.env.SERVER, //.env
    database: process.env.DATABASE //.env
}