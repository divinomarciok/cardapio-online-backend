import { Request, Response } from 'express';
import { MetodoPagamentoService } from '../services/metodopagamento.service';
import { MetodoPagamento } from '../models/metodospagamentos';

export class MetodoPagamentoController {
  private serviceMetodoPagamento: MetodoPagamentoService;

  constructor() {
    this.serviceMetodoPagamento = new MetodoPagamentoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { descricao } = req.body;
      const metodoPagamento = await this.serviceMetodoPagamento.criarMetodoPagamento({ descricao } as MetodoPagamento);
      res.status(201).json(metodoPagamento);
    } catch (error: any) {
      console.error('Erro ao criar método de pagamento:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar método de pagamento' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const metodosPagamento = await this.serviceMetodoPagamento.listarMetodosPagamento();
      res.status(200).json(metodosPagamento);
    } catch (error: any) {
      console.error('Erro ao listar métodos de pagamento:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar métodos de pagamento' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const metodoPagamento = await this.serviceMetodoPagamento.buscarMetodoPagamentoPorId(id);
      
      if (!metodoPagamento) {
        res.status(404).json({ message: 'Método de pagamento não encontrado' });
        return;
      }
      
      res.status(200).json(metodoPagamento);
    } catch (error: any) {
      console.error('Erro ao buscar método de pagamento:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar método de pagamento' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { descricao } = req.body;
      
      const metodoPagamentoAtualizado = await this.serviceMetodoPagamento.atualizarMetodoPagamento(id, { descricao });
      
      if (!metodoPagamentoAtualizado) {
        res.status(404).json({ message: 'Método de pagamento não encontrado' });
        return;
      }
      
      res.status(200).json(metodoPagamentoAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar método de pagamento:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar método de pagamento' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.serviceMetodoPagamento.excluirMetodoPagamento(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Método de pagamento não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir método de pagamento:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir método de pagamento' });
    }
  }
}