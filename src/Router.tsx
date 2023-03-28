import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '@/layout/default';

import { HomePage } from '@/pages/home';
import { OrderPage } from '@/pages/order';
import { ShoppingCartPage } from '@/pages/shopping-cart';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrinho" element={<ShoppingCartPage />} />
        <Route path="/pedido" element={<OrderPage />} />
      </Route>
    </Routes>
  );
}
