import { Router } from 'express';
import { StatusPedidoController } from '../controllers/statuspedido.controller';

const router = Router();
const statusPedidoController = new StatusPedidoController();

router.post('/status-pedido', (req, res) => statusPedidoController.create(req, res));
router.get('/status-pedido', (req, res) => statusPedidoController.list(req, res));
router.get('/status-pedido/:id', (req, res) => statusPedidoController.getById(req, res));
router.put('/status-pedido/:id', (req, res) => statusPedidoController.update(req, res));
router.delete('/status-pedido/:id', (req, res) => statusPedidoController.delete(req, res));

export { router as statusPedidoRotas };