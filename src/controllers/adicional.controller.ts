import { Request, Response } from 'express';
import { AdicionalService } from '../services/adicional.service';
import { Adicional } from '../models/adicionais';

export class AdicionalController {
  private serviceAdicional: AdicionalService;

  constructor() {
    this.serviceAdicional = new AdicionalService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { id_produto, foto, nome, descricao, quantidade, valor_final, valor_inicial } = req.body;
      const adicional = await this.serviceAdicional.criarAdicional({ 
        id_produto, foto, nome, descricao, quantidade, valor_final, valor_inicial 
      } as Adicional);
      res.status(201).json(adicional);
    } catch (error: any) {
      console.error('Erro ao criar adicional:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar adicional' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const adicionais = await this.serviceAdicional.listarAdicionais();
      res.status(200).json(adicionais);
    } catch (error: any) {
      console.error('Erro ao listar adicionais:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar adicionais' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const adicional = await this.serviceAdicional.buscarAdicionalPorId(id);
      
      if (!adicional) {
        res.status(404).json({ message: 'Adicional não encontrado' });
        return;
      }
      
      res.status(200).json(adicional);
    } catch (error: any) {
      console.error('Erro ao buscar adicional:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar adicional' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { id_produto, foto, nome, descricao, quantidade, valor_final, valor_inicial } = req.body;
      
      const adicionalAtualizado = await this.serviceAdicional.atualizarAdicional(id, { 
        id_produto, foto, nome, descricao, quantidade, valor_final, valor_inicial 
      });
      
      if (!adicionalAtualizado) {
        res.status(404).json({ message: 'Adicional não encontrado' });
        return;
      }
      
      res.status(200).json(adicionalAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar adicional:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar adicional' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.serviceAdicional.excluirAdicional(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Adicional não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir adicional:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir adicional' });
    }
  }
}