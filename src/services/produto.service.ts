import { ProdutoRepositorio } from "../repository/produto.repo";
import { Produto } from "../models/produtos";

export class ProdutoService {
  private produtoRepo: ProdutoRepositorio;

  constructor() {
    this.produtoRepo = new ProdutoRepositorio();
  }

  async criarProduto(produtoData: Produto): Promise<Produto> {
    return this.produtoRepo.create(produtoData);
  }

  async listarProdutos(): Promise<Produto[]> {
    return this.produtoRepo.list();
  }

  async buscarProdutoPorId(id: number): Promise<Produto | null> {
    return this.produtoRepo.findByid(id);
  }

  async atualizarProduto(id: number, produtoData: Partial<Produto>): Promise<Produto | null> {
    return this.produtoRepo.update(id, produtoData);
  }

  async excluirProduto(id: number): Promise<boolean> {
    return this.produtoRepo.delete(id);
  }
}