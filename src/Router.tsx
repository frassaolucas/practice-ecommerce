import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '@/layout/default';

import { Cart } from '@/pages/cart';
import { Home } from '@/pages/home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
