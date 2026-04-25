import { Router, Request, Response } from 'express';
import authController from '../../controllers/auth.controller.js';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Auth routes v1' });
});

export default router;