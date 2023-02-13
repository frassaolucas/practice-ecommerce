import { useCart } from '@/hooks/cart';

export function useShoppingCart() {
  const { cartList } = useCart();

  return { cartList };
}
