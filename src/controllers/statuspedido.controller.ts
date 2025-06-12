import { Request, Response } from 'express';
import { StatusPedidoService } from '../services/statuspedido.service';
import { StatusPedido } from '../models/statuspedidos';

export class StatusPedidoController {
  private serviceStatusPedido: StatusPedidoService;

  constructor() {
    this.serviceStatusPedido = new StatusPedidoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { descricao } = req.body;
      const statusPedido = await this.serviceStatusPedido.criarStatusPedido({ descricao } as StatusPedido);
      res.status(201).json(statusPedido);
    } catch (error: any) {
      console.error('Erro ao criar status de pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar status de pedido' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const statusPedidos = await this.serviceStatusPedido.listarStatusPedidos();
      res.status(200).json(statusPedidos);
    } catch (error: any) {
      console.error('Erro ao listar status de pedidos:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar status de pedidos' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const statusPedido = await this.serviceStatusPedido.buscarStatusPedidoPorId(id);
      
      if (!statusPedido) {
        res.status(404).json({ message: 'Status de pedido não encontrado' });
        return;
      }
      
      res.status(200).json(statusPedido);
    } catch (error: any) {
      console.error('Erro ao buscar status de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar status de pedido' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { descricao } = req.body;
      
      const statusPedidoAtualizado = await this.serviceStatusPedido.atualizarStatusPedido(id, { descricao });
      
      if (!statusPedidoAtualizado) {
        res.status(404).json({ message: 'Status de pedido não encontrado' });
        return;
      }
      
      res.status(200).json(statusPedidoAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar status de pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar status de pedido' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.serviceStatusPedido.excluirStatusPedido(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Status de pedido não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir status de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir status de pedido' });
    }
  }
}