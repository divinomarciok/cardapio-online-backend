import { Router } from 'express';
import { CupomController } from '../controllers/cupom.controller';

const router = Router();
const cupomController = new CupomController();

router.post('/cupom', (req, res) => cupomController.create(req, res));
router.get('/cupom', (req, res) => cupomController.list(req, res));
router.get('/cupom/:id', (req, res) => cupomController.getById(req, res));
router.put('/cupom/:id', (req, res) => cupomController.update(req, res));
router.delete('/cupom/:id', (req, res) => cupomController.delete(req, res));

export { router as cupomRotas };