import { Router } from 'express';
import { MetodoPagamentoController } from '../controllers/metodopagamento.controller';

const router = Router();
const metodoPagamentoController = new MetodoPagamentoController();

router.post('/metodo-pagamento', (req, res) => metodoPagamentoController.create(req, res));
router.get('/metodo-pagamento', (req, res) => metodoPagamentoController.list(req, res));
router.get('/metodo-pagamento/:id', (req, res) => metodoPagamentoController.getById(req, res));
router.put('/metodo-pagamento/:id', (req, res) => metodoPagamentoController.update(req, res));
router.delete('/metodo-pagamento/:id', (req, res) => metodoPagamentoController.delete(req, res));

export { router as metodoPagamentoRotas };