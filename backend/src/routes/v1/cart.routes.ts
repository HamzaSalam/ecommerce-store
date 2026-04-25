import { Router, Request, Response } from 'express';
import cartController from '../../controllers/cart.controller.js';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Cart routes v1' });
});

export default router;