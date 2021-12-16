import sql from "mssql";
import config from "../config";

const dbSettings = {
    user: config.user,
    password: config.password,
    server: config.server,
    database: config.database,
    port: 1433, // make sure to change port
    dialect: "mssql",
    dialectOptions: {
        "instanceName": "SQLEXPRESS"
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error)
    }
}

export {sql}
