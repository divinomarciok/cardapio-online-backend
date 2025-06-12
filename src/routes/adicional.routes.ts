import { Router } from 'express';
import { AdicionalController } from '../controllers/adicional.controller';

const router = Router();
const adicionalController = new AdicionalController();

router.post('/adicional', (req, res) => adicionalController.create(req, res));
router.get('/adicional', (req, res) => adicionalController.list(req, res));
router.get('/adicional/:id', (req, res) => adicionalController.getById(req, res));
router.put('/adicional/:id', (req, res) => adicionalController.update(req, res));
router.delete('/adicional/:id', (req, res) => adicionalController.delete(req, res));

export { router as adicionalRotas };