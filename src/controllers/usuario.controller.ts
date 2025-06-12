import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

export class UsuarioController {
  private serviceUsuario: UsuarioService;

  constructor() {
    this.serviceUsuario = new UsuarioService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { id_permissao, cpf, sobrenome, email, telefone, username, password } = req.body;
      const usuario = await this.serviceUsuario.criarUsuario({ 
        id_permissao, cpf, sobrenome, email, telefone, username, password 
      } as Usuario);
      res.status(201).json(usuario);
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar usuário' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await this.serviceUsuario.listarUsuarios();
      res.status(200).json(usuarios);
    } catch (error: any) {
      console.error('Erro ao listar usuários:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar usuários' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const usuario = await this.serviceUsuario.buscarUsuarioPorId(id);
      
      if (!usuario) {
        res.status(404).json({ message: 'Usuário não encontrado' });
        return;
      }
      
      res.status(200).json(usuario);
    } catch (error: any) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar usuário' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { id_permissao, cpf, sobrenome, email, telefone, username, password } = req.body;
      
      const usuarioAtualizado = await this.serviceUsuario.atualizarUsuario(id, { 
        id_permissao, cpf, sobrenome, email, telefone, username, password 
      });
      
      if (!usuarioAtualizado) {
        res.status(404).json({ message: 'Usuário não encontrado' });
        return;
      }
      
      res.status(200).json(usuarioAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar usuário' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.serviceUsuario.excluirUsuario(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Usuário não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir usuário:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir usuário' });
    }
  }
}