import { useOrder } from '@/hooks/order';

export function useOrderPage() {
  const { order } = useOrder();

  return {
    order,
  };
}
