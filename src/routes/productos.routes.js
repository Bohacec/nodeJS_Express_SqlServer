import { Router } from "express";
import { eliminarProductoById, getProductoById, getProductos, ingresarNuevoProducto, obtenerTotalProductos, updateProductos } from "../controllers/productos.controller";

const router = Router();

router.get('/productos', getProductos);

router.post('/productos', ingresarNuevoProducto);

router.get('/productos/count', obtenerTotalProductos);

router.get('/productos/:id', getProductoById);

router.delete('/productos/:id', eliminarProductoById);

router.put('/productos/:id', updateProductos);

export default router;