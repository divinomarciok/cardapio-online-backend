import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        res.status(400).json({ message: 'Username e senha são obrigatórios' });
        return;
      }

      const result = await this.authService.login(username, password);

      if (!result) {
        res.status(401).json({ message: 'Credenciais inválidas' });
        return;
      }

      res.status(200).json(result);
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ message: error.message || 'Erro ao fazer login' });
    }
  }
}
