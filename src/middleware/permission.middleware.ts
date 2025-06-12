import { Request, Response, NextFunction } from 'express';

export const permissionMiddleware = (requiredPermission: number) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;

    if (!user) {
      res.status(403).json({ message: 'Usuário não autenticado' });
      return;
    }


    const { permissao } = user; // Acessa o id_permissao do usuário

    console.log("login",user.permissao);

    if (permissao !== requiredPermission) {
      res.status(403).json({ message: 'Permissão negada' });
      return;
    }

    next();
  };
};