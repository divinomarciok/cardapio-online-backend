import { Request, Response } from 'express';
import { EnderecoService } from '../services/endereco.service';
import { Endereco } from '../models/enderecos';

export class EnderecoController {
  private serviceEndereco: EnderecoService;

  constructor() {
    this.serviceEndereco = new EnderecoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { id_usuario, cep, rua, bairro, numero, referencia, complemento } = req.body;
      const endereco = await this.serviceEndereco.criarEndereco({ 
        id_usuario, cep, rua, bairro, numero, referencia, complemento 
      } as Endereco);
      res.status(201).json(endereco);
    } catch (error: any) {
      console.error('Erro ao criar endereço:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar endereço' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const enderecos = await this.serviceEndereco.listarEnderecos();
      res.status(200).json(enderecos);
    } catch (error: any) {
      console.error('Erro ao listar endereços:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar endereços' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const endereco = await this.serviceEndereco.buscarEnderecoPorId(id);
      
      if (!endereco) {
        res.status(404).json({ message: 'Endereço não encontrado' });
        return;
      }
      
      res.status(200).json(endereco);
    } catch (error: any) {
      console.error('Erro ao buscar endereço:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar endereço' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { id_usuario, cep, rua, bairro, numero, referencia, complemento } = req.body;
      
      const enderecoAtualizado = await this.serviceEndereco.atualizarEndereco(id, { 
        id_usuario, cep, rua, bairro, numero, referencia, complemento 
      });
      
      if (!enderecoAtualizado) {
        res.status(404).json({ message: 'Endereço não encontrado' });
        return;
      }
      
      res.status(200).json(enderecoAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar endereço:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar endereço' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.serviceEndereco.excluirEndereco(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Endereço não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir endereço:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir endereço' });
    }
  }
}