import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useCart } from '@/hooks/cart';
import { useProducts } from '@/hooks/products';

import { FormData } from './ShoppingCart.types';

export function useShoppingCart() {
  const { cartList } = useCart();
  const { products } = useProducts();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

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

  const handleConfirmOrder = ({
    payment,
    zipCode,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
  }: FormData) => {
    const payload = {
      address: {
        zipCode,
        street,
        number,
        complement,
        neighborhood,
        city,
        state,
      },
      payment,
      products: cartList,
    };

    console.log('payload', payload);
  };

  return {
    cartList,
    register,
    errors,
    deliveryCostPrice,
    cartItemsTotalPrice,
    totalPrice,
    handleSubmit,
    handleConfirmOrder,
  };
}
