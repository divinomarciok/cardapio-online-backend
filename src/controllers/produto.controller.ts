import { Request, Response } from 'express';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produtos';

export class ProdutoController {
  private serviceProduto: ProdutoService;

  constructor() {
    this.serviceProduto = new ProdutoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { foto, nome, descricao, quantidade, valor_final, valor_inicial } = req.body;
      const produto = await this.serviceProduto.criarProduto({ 
        foto, nome, descricao, quantidade, valor_final, valor_inicial 
      } as Produto);
      res.status(201).json(produto);
    } catch (error: any) {
      console.error('Erro ao criar produto:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar produto' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const produtos = await this.serviceProduto.listarProdutos();
      res.status(200).json(produtos);
    } catch (error: any) {
      console.error('Erro ao listar produtos:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar produtos' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const produto = await this.serviceProduto.buscarProdutoPorId(id);
      
      if (!produto) {
        res.status(404).json({ message: 'Produto não encontrado' });
        return;
      }
      
      res.status(200).json(produto);
    } catch (error: any) {
      console.error('Erro ao buscar produto:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar produto' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { foto, nome, descricao, quantidade, valor_final, valor_inicial } = req.body;
      
      const produtoAtualizado = await this.serviceProduto.atualizarProduto(id, { 
        foto, nome, descricao, quantidade, valor_final, valor_inicial 
      });
      
      if (!produtoAtualizado) {
        res.status(404).json({ message: 'Produto não encontrado' });
        return;
      }
      
      res.status(200).json(produtoAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar produto:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar produto' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.serviceProduto.excluirProduto(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Produto não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir produto:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir produto' });
    }
  }
}