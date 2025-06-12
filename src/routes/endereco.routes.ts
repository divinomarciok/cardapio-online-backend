import { Router } from 'express';
import { EnderecoController } from '../controllers/endereco.controller';

const router = Router();
const enderecoController = new EnderecoController();

router.post('/endereco', (req, res) => enderecoController.create(req, res));
router.get('/endereco', (req, res) => enderecoController.list(req, res));
router.get('/endereco/:id', (req, res) => enderecoController.getById(req, res));
router.put('/endereco/:id', (req, res) => enderecoController.update(req, res));
router.delete('/endereco/:id', (req, res) => enderecoController.delete(req, res));

export { router as enderecoRotas };