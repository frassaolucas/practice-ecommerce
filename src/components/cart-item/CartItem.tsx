import { QuantityInput } from '../quantity-input';
import { useCartItem } from './CartItem.hooks';
import { CartItemContainer, CartItemsControls } from './CartItem.styles';
import { CartItemProps } from './CartItem.types';

export const CartItem = ({ product }: CartItemProps) => {
  const { cartItem, handleChangeQuantity } = useCartItem({ product });

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
      </CartItemsControls>
    </CartItemContainer>
  );
};
