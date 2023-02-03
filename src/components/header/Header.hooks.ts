import { useCart } from '@/hooks/cart';

export function useHeader() {
  const { cartList } = useCart();

  return { cartList };
}
