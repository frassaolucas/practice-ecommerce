import { useMemo } from 'react';

import { useCart } from '@/hooks/cart';
import { useProducts } from '@/hooks/products';

export function useShoppingCart() {
  const { cartList } = useCart();
  const { products } = useProducts();

  const cartItemsTotal = useMemo(
    () =>
      cartList.reduce((accumulator, currentValue) => {
        const itemPrice = products.find(
          (product) => product.id === currentValue.id
        )!.price;

        const itemTotal = itemPrice * currentValue.quantity;

        return accumulator + itemTotal;
      }, 0),
    [cartList]
  );

  const cartItemsTotalPrice = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
      }).format(cartItemsTotal),
    [cartList]
  );

  const deliveryCost = 3.5;
  const deliveryCostPrice = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
      }).format(deliveryCost),
    [cartList]
  );

  const totalPrice = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
      }).format(cartItemsTotal + deliveryCost),
    [cartList]
  );

  return { cartList, deliveryCostPrice, cartItemsTotalPrice, totalPrice };
}
