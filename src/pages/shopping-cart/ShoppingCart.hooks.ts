import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useCart } from '@/hooks/cart';
import { useOrder } from '@/hooks/order';
import { useProducts } from '@/hooks/products';

import { FormData } from './ShoppingCart.types';

export function useShoppingCartPage() {
  const { cartList } = useCart();
  const { products } = useProducts();
  const { saveOrder } = useOrder();
  const navigate = useNavigate();
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
    const order = {
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
      itemsTotal: cartItemsTotal,
      deliveryCost: deliveryCost,
    };

    saveOrder(order);
    navigate('/pedido');
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
