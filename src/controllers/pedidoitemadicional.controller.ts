import { Request, Response } from 'express';
import { PedidoItemAdicionalService } from '../services/pedidoitemadicional.service';
import { PedidoItemAdicional } from '../models/pedidositensadicionais';

export class PedidoItemAdicionalController {
  private servicePedidoItemAdicional: PedidoItemAdicionalService;

  constructor() {
    this.servicePedidoItemAdicional = new PedidoItemAdicionalService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { id_pedido, id_adicional, valor_final, valor_inicial, quantidade } = req.body;
      const pedidoItemAdicional = await this.servicePedidoItemAdicional.criarPedidoItemAdicional({ 
        id_pedido, id_adicional, valor_final, valor_inicial, quantidade 
      } as PedidoItemAdicional);
      res.status(201).json(pedidoItemAdicional);
    } catch (error: any) {
      console.error('Erro ao criar adicional de item de pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar adicional de item de pedido' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const pedidoItensAdicionais = await this.servicePedidoItemAdicional.listarPedidoItensAdicionais();
      res.status(200).json(pedidoItensAdicionais);
    } catch (error: any) {
      console.error('Erro ao listar adicionais de itens de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar adicionais de itens de pedido' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const pedidoItemAdicional = await this.servicePedidoItemAdicional.buscarPedidoItemAdicionalPorId(id);
      
      if (!pedidoItemAdicional) {
        res.status(404).json({ message: 'Adicional de item de pedido não encontrado' });
        return;
      }
      
      res.status(200).json(pedidoItemAdicional);
    } catch (error: any) {
      console.error('Erro ao buscar adicional de item de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar adicional de item de pedido' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { id_pedido, id_adicional, valor_final, valor_inicial, quantidade } = req.body;
      
      const pedidoItemAdicionalAtualizado = await this.servicePedidoItemAdicional.atualizarPedidoItemAdicional(id, { 
        id_pedido, id_adicional, valor_final, valor_inicial, quantidade 
      });
      
      if (!pedidoItemAdicionalAtualizado) {
        res.status(404).json({ message: 'Adicional de item de pedido não encontrado' });
        return;
      }
      
      res.status(200).json(pedidoItemAdicionalAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar adicional de item de pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar adicional de item de pedido' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.servicePedidoItemAdicional.excluirPedidoItemAdicional(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Adicional de item de pedido não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir adicional de item de pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir adicional de item de pedido' });
    }
  }
}