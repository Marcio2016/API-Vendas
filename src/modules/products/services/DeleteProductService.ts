import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from './../typeorm/repositories/ProductRepository';

import Product from '../typeorm/entities/Product';

interface IRequest {
  id: string;
}

class DeleteProductSevice {
  public async execute({ id }: IRequest): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);
    if (!product) {
      throw new AppError('Product not found');
    }

    await productRepository.remove(product);
  }
}

export default DeleteProductSevice;
