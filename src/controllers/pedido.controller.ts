import { Request, Response } from 'express';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedidos';

export class PedidoController {
  private servicePedido: PedidoService;

  constructor() {
    this.servicePedido = new PedidoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { 
        id_usuario, id_status_pedido, id_metodo_pagamento, id_cupom,
        valor_total_final, valor_total_inicial, observacao, retirada,
        cep, rua, bairro, numero, referencia, complemento
      } = req.body;
      
      const pedido = await this.servicePedido.criarPedido({ 
        id_usuario, id_status_pedido, id_metodo_pagamento, id_cupom,
        valor_total_final, valor_total_inicial, observacao, retirada,
        cep, rua, bairro, numero, referencia, complemento
      } as Pedido);
      
      res.status(201).json(pedido);
    } catch (error: any) {
      console.error('Erro ao criar pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar pedido' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const pedidos = await this.servicePedido.listarPedidos();
      res.status(200).json(pedidos);
    } catch (error: any) {
      console.error('Erro ao listar pedidos:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar pedidos' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const pedido = await this.servicePedido.buscarPedidoPorId(id);
      
      if (!pedido) {
        res.status(404).json({ message: 'Pedido não encontrado' });
        return;
      }
      
      res.status(200).json(pedido);
    } catch (error: any) {
      console.error('Erro ao buscar pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar pedido' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { 
        id_usuario, id_status_pedido, id_metodo_pagamento, id_cupom,
        valor_total_final, valor_total_inicial, observacao, retirada,
        cep, rua, bairro, numero, referencia, complemento
      } = req.body;
      
      const pedidoAtualizado = await this.servicePedido.atualizarPedido(id, { 
        id_usuario, id_status_pedido, id_metodo_pagamento, id_cupom,
        valor_total_final, valor_total_inicial, observacao, retirada,
        cep, rua, bairro, numero, referencia, complemento
      });
      
      if (!pedidoAtualizado) {
        res.status(404).json({ message: 'Pedido não encontrado' });
        return;
      }
      
      res.status(200).json(pedidoAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar pedido:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar pedido' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.servicePedido.excluirPedido(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Pedido não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir pedido:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir pedido' });
    }
  }
}