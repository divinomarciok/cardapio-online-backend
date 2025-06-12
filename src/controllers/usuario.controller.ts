import {Request, Response} from 'express';
import { UsuarioRepositorio } from '../repository/usuario.repo';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

export class UsuarioController {
    private serviceUsuario: UsuarioService;

    constructor (){
      this.serviceUsuario = new UsuarioService();
    }

    async create (req: Request, res: Response): Promise<void>{
      try{

         let {id_permissao,cpf,sobrenome,email,telefone,username,password} = req.body;

         const usuario = this.serviceUsuario.criaUsuario({id_permissao,cpf,sobrenome,email,telefone,username,password} as Usuario);
         //const {password:_,...usuarioNoPassword} = usuario;
       res.status(201).json(usuario);
      }catch(error: any){

             console.error('Erro ao criar usuário:', error);
            res.status(400).json({ message: error.message || 'Erro ao criar usuário' });

      }
    }
}