import { SmileyXEyes } from 'phosphor-react';

import { CartItem } from '@/components/cart-item';

import { useShoppingCart } from './ShoppingCart.hooks';
import {
  CartCheckoutInfoContainer,
  CartCheckoutTotal,
  CartCheckoutTotalContainer,
  CartCheckoutTotalItem,
  CartContainer,
  CartSection,
  ConfirmOrderButton,
  EmptyCart,
  EmptyCartLink,
} from './ShoppingCart.styles';

export function ShoppingCart() {
  const { cartList } = useShoppingCart();

  if (!cartList.length) {
    return (
      <EmptyCart>
        <SmileyXEyes size={128} />

        <p>Seu carrinho está vazio.</p>

        <EmptyCartLink to="/">Retornar</EmptyCartLink>
      </EmptyCart>
    );
  }

  return (
    <CartContainer>
      <CartSection>
        <h3>Complete seu pedido</h3>
      </CartSection>

      <CartSection>
        <h3>Cafés selecionados</h3>

        <CartCheckoutInfoContainer>
          {cartList.map((cartItem) => (
            <CartItem key={cartItem.id} product={cartItem} />
          ))}

          <CartCheckoutTotalContainer>
            <CartCheckoutTotalItem>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </CartCheckoutTotalItem>

            <CartCheckoutTotalItem>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </CartCheckoutTotalItem>

            <CartCheckoutTotal>
              <span>Total</span>
              <span>R$ 33,20</span>
            </CartCheckoutTotal>
          </CartCheckoutTotalContainer>

          <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
        </CartCheckoutInfoContainer>
      </CartSection>
    </CartContainer>
  );
}
