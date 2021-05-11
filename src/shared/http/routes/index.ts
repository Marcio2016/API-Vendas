import productRouter from '@modules/products/routes/product.router';
import { Router } from 'express';

const router = Router();

router.use('/product', productRouter);


export default router;
