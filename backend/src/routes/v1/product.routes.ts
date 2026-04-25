import { Router, Request, Response } from 'express';
import productController from '../../controllers/product.controller.js';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Product routes v1' });
});

export default router;