import { Outlet } from 'react-router-dom';

import { Header } from '@/components/header';

import { CartProvider } from '@/provider/cart';
import { ProductsProvider } from '@/provider/products';
import { Container } from './DefaultLayout.styles';

export function DefaultLayout() {
  return (
    <Container>
      <ProductsProvider>
        <CartProvider>
          <Header />

          <Outlet />
        </CartProvider>
      </ProductsProvider>
    </Container>
  );
}
