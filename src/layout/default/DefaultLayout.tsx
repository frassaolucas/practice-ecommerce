import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Header } from '@/components/header';

import { CartProvider } from '@/provider/cart';
import { ProductsProvider } from '@/provider/products';
import { Container } from './DefaultLayout.styles';

import 'react-toastify/dist/ReactToastify.css';

export function DefaultLayout() {
  return (
    <Container>
      <ProductsProvider>
        <CartProvider>
          <ToastContainer />

          <Header />

          <Outlet />
        </CartProvider>
      </ProductsProvider>
    </Container>
  );
}
