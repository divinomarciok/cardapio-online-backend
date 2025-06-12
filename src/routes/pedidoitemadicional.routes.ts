import { Router } from 'express';
import { PedidoItemAdicionalController } from '../controllers/pedidoitemadicional.controller';

const router = Router();
const pedidoItemAdicionalController = new PedidoItemAdicionalController();

router.post('/pedido-item-adicional', (req, res) => pedidoItemAdicionalController.create(req, res));
router.get('/pedido-item-adicional', (req, res) => pedidoItemAdicionalController.list(req, res));
router.get('/pedido-item-adicional/:id', (req, res) => pedidoItemAdicionalController.getById(req, res));
router.put('/pedido-item-adicional/:id', (req, res) => pedidoItemAdicionalController.update(req, res));
router.delete('/pedido-item-adicional/:id', (req, res) => pedidoItemAdicionalController.delete(req, res));

export { router as pedidoItemAdicionalRotas };