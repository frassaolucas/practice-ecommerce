import { useCart } from '@/hooks/cart';
import { useProducts } from '@/hooks/products';

import { CartItemProps } from './CartItem.types';

export const useCartItem = ({ product }: CartItemProps) => {
  const { cartList, updateQuantity } = useCart();
  const { products } = useProducts();

  const productInfo = products.find((item) => item.id === product.id)!;
  const productQuantity = cartList.find(
    (cartItem) => cartItem.id === product.id
  )!.quantity;

  const cartItem = {
    id: productInfo.id,
    image: productInfo.image,
    name: productInfo.name,
    price: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      productInfo.price * productQuantity
    ),
    quantity: productQuantity,
  };

  function handleChangeQuantity(newQuantity: number) {
    updateQuantity(product.id, newQuantity);
  }

  return { cartItem, handleChangeQuantity };
};
