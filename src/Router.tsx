import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '@/layout/default';

import { Home } from '@/pages/home';
import { ShoppingCart } from '@/pages/shopping-cart';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}
