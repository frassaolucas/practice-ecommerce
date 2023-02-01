import { Route, Routes } from 'react-router-dom';

import { CartProvider } from './provider/cart';

import { DefaultLayout } from '@/layout/default';

import { Home } from '@/pages/home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<CartProvider />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}
