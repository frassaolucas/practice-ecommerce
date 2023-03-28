import { createContext, useState } from 'react';

import { Order, OrderContextValues, OrderProviderProps } from './order.types';

export const OrderContext = createContext<OrderContextValues>(
  {} as OrderContextValues
);

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<Order>();

  function saveOrder(order: Order) {
    setOrder(order);
  }

  return (
    <OrderContext.Provider value={{ order, saveOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
