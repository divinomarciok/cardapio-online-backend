import {Router} from 'express';
import { UsuarioController } from '../controllers/usuario.controller';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/usuario',(req,res)=> usuarioController.create(req,res));

export { router as usuarioRotas };