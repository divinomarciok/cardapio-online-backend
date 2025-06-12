import { Request, Response } from 'express';
import { PermissaoService } from '../services/permissao.service';
import { Permissao } from '../models/permissao';

export class PermissaoController {
  private servicePermissao: PermissaoService;

  constructor() {
    this.servicePermissao = new PermissaoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { descricao } = req.body;
      const permissao = await this.servicePermissao.criarPermissao({ descricao } as Permissao);
      res.status(201).json(permissao);
    } catch (error: any) {
      console.error('Erro ao criar permissão:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar permissão' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const permissoes = await this.servicePermissao.listarPermissoes();
      res.status(200).json(permissoes);
    } catch (error: any) {
      console.error('Erro ao listar permissões:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar permissões' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const permissao = await this.servicePermissao.buscarPermissaoPorId(id);
      
      if (!permissao) {
        res.status(404).json({ message: 'Permissão não encontrada' });
        return;
      }
      
      res.status(200).json(permissao);
    } catch (error: any) {
      console.error('Erro ao buscar permissão:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar permissão' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { descricao } = req.body;
      
      const permissaoAtualizada = await this.servicePermissao.atualizarPermissao(id, { descricao });
      
      if (!permissaoAtualizada) {
        res.status(404).json({ message: 'Permissão não encontrada' });
        return;
      }
      
      res.status(200).json(permissaoAtualizada);
    } catch (error: any) {
      console.error('Erro ao atualizar permissão:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar permissão' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.servicePermissao.excluirPermissao(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Permissão não encontrada' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir permissão:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir permissão' });
    }
  }
}
