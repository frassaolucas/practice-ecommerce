import { useCart } from '@/hooks/cart';

export const useHeader = () => {
  const { cartList } = useCart();

  return { cartList };
};
