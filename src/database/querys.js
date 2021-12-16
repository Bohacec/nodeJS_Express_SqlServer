export const queries = {
    getTodosLosProductos: 'SELECT * FROM Productos',
    agregarNuevoProducto: 'INSERT INTO Productos (nombre, descripcion, cantidad) VALUES (@nombre, @descripcion, @cantidad)',
    getProductoById: 'SELECT * FROM Productos WHERE Id = @Id',
    eliminarProducto: 'DELETE FROM Productos WHERE iD = @Id',
    getTotalProductos: 'SELECT COUNT(*) FROM Productos',
    updateProductoById: 'UPDATE Productos SET nombre = @nombre, descripcion = @descripcion, cantidad = @cantidad WHERE Id = @id'
}