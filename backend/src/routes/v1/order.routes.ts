import { Router, Request, Response } from 'express';
import orderController from '../../controllers/order.controller.js';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Order routes v1' });
});

export default router;