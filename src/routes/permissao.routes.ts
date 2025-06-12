import { Router } from 'express';
import { PermissaoController } from '../controllers/permissao.controller';

const router = Router();
const permissaoController = new PermissaoController();

router.post('/permissao', (req, res) => permissaoController.create(req, res));
router.get('/permissao', (req, res) => permissaoController.list(req, res));
router.get('/permissao/:id', (req, res) => permissaoController.getById(req, res));
router.put('/permissao/:id', (req, res) => permissaoController.update(req, res));
router.delete('/permissao/:id', (req, res) => permissaoController.delete(req, res));

export { router as permissaoRotas };