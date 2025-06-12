import { Router } from 'express';
import { PedidoItemController } from '../controllers/pedidoitem.controller';

const router = Router();
const pedidoItemController = new PedidoItemController();

router.post('/pedido-item', (req, res) => pedidoItemController.create(req, res));
router.get('/pedido-item', (req, res) => pedidoItemController.list(req, res));
router.get('/pedido-item/:id', (req, res) => pedidoItemController.getById(req, res));
router.put('/pedido-item/:id', (req, res) => pedidoItemController.update(req, res));
router.delete('/pedido-item/:id', (req, res) => pedidoItemController.delete(req, res));

export { router as pedidoItemRotas };