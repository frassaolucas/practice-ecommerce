import { useContext } from 'react';

import { OrderContext, OrderContextValues } from '@/provider/order';

export function useOrder(): OrderContextValues {
  return useContext(OrderContext);
}
