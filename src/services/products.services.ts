import { products } from './products.consts';
import { Products } from './products.types';

export function getProducts(signal?: AbortSignal): Promise<Products[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (signal?.aborted) {
        reject(signal.reason);
      }

      resolve(products);
    }, Math.random() * 1000);
  });
}
