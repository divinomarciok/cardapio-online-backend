import { Router } from 'express';
import { ProdutoController } from '../controllers/produto.controller';

const router = Router();
const produtoController = new ProdutoController();

router.post('/produto', (req, res) => produtoController.create(req, res));
router.get('/produto', (req, res) => produtoController.list(req, res));
router.get('/produto/:id', (req, res) => produtoController.getById(req, res));
router.put('/produto/:id', (req, res) => produtoController.update(req, res));
router.delete('/produto/:id', (req, res) => produtoController.delete(req, res));

export { router as produtoRotas };