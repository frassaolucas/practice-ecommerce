import { QuantityInput } from '../quantity-input';
import { useCartItem } from './CartItem.hooks';
import { CartItemContainer, CartItemsControls } from './CartItem.styles';
import { CartItemProps } from './CartItem.types';

export function CartItem({ product }: CartItemProps) {
  const { cartItem, handleChangeQuantity } = useCartItem({ product });

  return (
    <CartItemContainer>
      <img src={cartItem.image} />

      <span>{cartItem.name}</span>

      <strong>R$ {cartItem.price}</strong>

      <CartItemsControls>
        <QuantityInput onChange={handleChangeQuantity} />
      </CartItemsControls>
    </CartItemContainer>
  );
}
