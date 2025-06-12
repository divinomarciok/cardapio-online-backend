import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/usuario', (req, res) => usuarioController.create(req, res));
router.get('/usuario', (req, res) => usuarioController.list(req, res));
router.get('/usuario/:id', (req, res) => usuarioController.getById(req, res));
router.put('/usuario/:id', (req, res) => usuarioController.update(req, res));
router.delete('/usuario/:id', (req, res) => usuarioController.delete(req, res));

export { router as usuarioRotas };