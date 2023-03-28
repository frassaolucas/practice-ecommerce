import { ReactNode } from 'react';

import { CartItem } from '@/provider/cart';

export type Order = {
  address: {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  payment: string;
  products: CartItem[];
  itemsTotal: number;
  deliveryCost: number;
};

export type OrderContextValues = {
  order: Order | undefined;
  saveOrder: (order: Order) => void;
};

export type OrderProviderProps = {
  children: ReactNode;
};
