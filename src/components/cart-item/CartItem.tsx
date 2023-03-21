import { Trash } from 'phosphor-react';

import { QuantityInput } from '@/components/quantity-input';

import { useCartItem } from './CartItem.hooks';
import {
  CartItemContainer,
  CartItemsControls,
  CartRemoveButton,
} from './CartItem.styles';
import { CartItemProps } from './CartItem.types';

export const CartItem = ({ product }: CartItemProps) => {
  const { cartItem, handleChangeQuantity, handleRemoveItemFromCart } =
    useCartItem({ product });

  return (
    <CartItemContainer>
      <img src={cartItem.image} />

      <span>{cartItem.name}</span>

      <strong>R$ {cartItem.price}</strong>

      <CartItemsControls>
        <QuantityInput
          value={cartItem.quantity}
          onQuantityChange={handleChangeQuantity}
        />

        <CartRemoveButton onClick={handleRemoveItemFromCart}>
          <Trash size={16} />
          remover
        </CartRemoveButton>
      </CartItemsControls>
    </CartItemContainer>
  );
};
