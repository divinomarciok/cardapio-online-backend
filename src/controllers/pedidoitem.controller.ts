import { Request, Response } from 'express';
import { PedidoItemService } from '../services/pedidoitem.service';
import { PedidoItem } from '../models/pedidositens';

export class PedidoItemController {
  private servicePedidoItem: PedidoItemService;

  constructor() {
    this.servicePedidoItem = new PedidoItemService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { id_pedido, id_produto, valor_final, valor_inicial, observacao } = req.body;
      const pedidoItem = await this.servicePedidoItem.criarPedidoItem({ 
        id_pedido, id_produto, valor_final, valor_inicial, observacao 
      } as PedidoItem);
      res.status(201).json(pedidoItem);
    } catch (error: any) {
      console.error('Erro ao criar item de pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar item de pedido' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const pedidoItens = await this.servicePedidoItem.listarPedidoItens();
      res.status(200).json(pedidoItens);
    } catch (error: any) {
      console.error('Erro ao listar itens de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar itens de pedido' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const pedidoItem = await this.servicePedidoItem.buscarPedidoItemPorId(id);
      
      if (!pedidoItem) {
        res.status(404).json({ message: 'Item de pedido não encontrado' });
        return;
      }
      
      res.status(200).json(pedidoItem);
    } catch (error: any) {
      console.error('Erro ao buscar item de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar item de pedido' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { id_pedido, id_produto, valor_final, valor_inicial, observacao } = req.body;
      
      const pedidoItemAtualizado = await this.servicePedidoItem.atualizarPedidoItem(id, { 
        id_pedido, id_produto, valor_final, valor_inicial, observacao 
      });
      
      if (!pedidoItemAtualizado) {
        res.status(404).json({ message: 'Item de pedido não encontrado' });
        return;
      }
      
      res.status(200).json(pedidoItemAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar item de pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar item de pedido' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.servicePedidoItem.excluirPedidoItem(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Item de pedido não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir item de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir item de pedido' });
    }
  }
}