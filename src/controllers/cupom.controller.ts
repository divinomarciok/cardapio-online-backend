import { Request, Response } from 'express';
import { CupomService } from '../services/cupom.service';
import { Cupom } from '../models/cupons';

export class CupomController {
  private serviceCupom: CupomService;

  constructor() {
    this.serviceCupom = new CupomService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { valor, descricao } = req.body;
      const cupom = await this.serviceCupom.criarCupom({ valor, descricao } as Cupom);
      res.status(201).json(cupom);
    } catch (error: any) {
      console.error('Erro ao criar cupom:', error);
      res.status(400).json({ message: error.message || 'Erro ao criar cupom' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const cupons = await this.serviceCupom.listarCupons();
      res.status(200).json(cupons);
    } catch (error: any) {
      console.error('Erro ao listar cupons:', error);
      res.status(500).json({ message: error.message || 'Erro ao listar cupons' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const cupom = await this.serviceCupom.buscarCupomPorId(id);
      
      if (!cupom) {
        res.status(404).json({ message: 'Cupom não encontrado' });
        return;
      }
      
      res.status(200).json(cupom);
    } catch (error: any) {
      console.error('Erro ao buscar cupom:', error);
      res.status(500).json({ message: error.message || 'Erro ao buscar cupom' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { valor, descricao } = req.body;
      
      const cupomAtualizado = await this.serviceCupom.atualizarCupom(id, { valor, descricao });
      
      if (!cupomAtualizado) {
        res.status(404).json({ message: 'Cupom não encontrado' });
        return;
      }
      
      res.status(200).json(cupomAtualizado);
    } catch (error: any) {
      console.error('Erro ao atualizar cupom:', error);
      res.status(400).json({ message: error.message || 'Erro ao atualizar cupom' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const sucesso = await this.serviceCupom.excluirCupom(id);
      
      if (!sucesso) {
        res.status(404).json({ message: 'Cupom não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      console.error('Erro ao excluir cupom:', error);
      res.status(500).json({ message: error.message || 'Erro ao excluir cupom' });
    }
  }
}