import { Router } from 'express';
import { PedidoController } from '../controllers/pedido.controller';
import { permissionMiddleware } from '../middleware/permission.middleware';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const pedidoController = new PedidoController();

router.post('/pedido', authMiddleware ,permissionMiddleware(1),(req, res) => pedidoController.create(req, res));
router.get('/pedido', (req, res) => pedidoController.list(req, res));
router.get('/pedido/:id', (req, res) => pedidoController.getById(req, res));
router.put('/pedido/:id', (req, res) => pedidoController.update(req, res));
router.delete('/pedido/:id', (req, res) => pedidoController.delete(req, res));

export { router as pedidoRotas };