import { getConnection, sql, queries } from "../database";

export const getProductos = async (req, res) => { 
    try {
        const pool = await getConnection(); //llamo a la coneccion y esto me retorna un pool    
        const result = await pool.request().query(queries.getTodosLosProductos); //con el pool, hago una peticion (consulta)
        res.json(result);   
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const ingresarNuevoProducto = async (req, res) => {
    try {
        const {nombre, descripcion} = req.body //req.body recibe todos los datos que el cliente le envia
        let {cantidad} = req.body;

        if(cantidad == null ) cantidad = 0;

        if(nombre == null || descripcion == null){
            return res.status(400).json({msg: "Completa todos los datos"})
        }

        const pool = await getConnection()
        await pool.request()
        .input("nombre", sql.VarChar, nombre)
        .input("descripcion", sql.Text, descripcion)
        .input("cantidad", sql.Int, cantidad)
        .query(queries.agregarNuevoProducto)
        console.log(nombre, descripcion, cantidad)
 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getProductoById = async (req, resp) => {
    const {id} = req.params;
    const pool = await getConnection();
    const result = await pool.request()
                    .input('Id', id)
                    .query(queries.getProductoById)

    resp.send(result.recordset[0]);
}

export const eliminarProductoById = async (req, res) => {
    const {id} = req.params;
    const pool = await getConnection();

    const result = await pool.request().input('Id', id).query(queries.eliminarProducto);

    res.sendStatus(204); //no devulevo un mensaje, solo digo que todo estuvo ok
    
}

export const obtenerTotalProductos = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTotalProductos);

    res.json(result.recordset[0]['']);
}

export const updateProductos = async (req, res) => {
    const {nombre, descripcion, cantidad} = req.body
    const { id } = req.params

    if(nombre == null || descripcion == null || cantidad == null){
        return res.status(400).json({msg: "Completa todos los datos"})
    }

    const pool = await getConnection();
    const result = await pool.request()
                    .input("nombre", sql.VarChar, nombre)
                    .input("descripcion", sql.Text, descripcion)
                    .input("cantidad", sql.Int, cantidad)
                    .input("id", sql.Int, id)
                    .query(queries.updateProductoById)
    
    res.json(nombre, descripcion, cantidad)
}