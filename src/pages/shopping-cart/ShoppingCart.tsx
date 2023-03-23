import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  SmileyXEyes,
} from 'phosphor-react';

import { CartItem } from '@/components/cart-item';

import { useShoppingCart } from './ShoppingCart.hooks';
import {
  CartAddressContainer,
  CartBillingCard,
  CartBillingCardHeader,
  CartBillingContainer,
  CartCheckoutTotal,
  CartCheckoutTotalContainer,
  CartCheckoutTotalItem,
  CartContainer,
  CartPaymentMethodContainer,
  CartReceiptContainer,
  CartSection,
  ConfirmOrderButton,
  EmptyCart,
  EmptyCartLink,
  Input,
} from './ShoppingCart.styles';

export function ShoppingCart() {
  const {
    cartList,
    register,
    deliveryCostPrice,
    cartItemsTotalPrice,
    totalPrice,
    handleSubmit,
    handleConfirmOrder,
  } = useShoppingCart();

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
    <CartContainer onSubmit={handleSubmit(handleConfirmOrder)}>
      <CartSection>
        <h3>Complete seu pedido</h3>

        <CartBillingContainer>
          <CartBillingCard>
            <CartBillingCardHeader variant="address">
              <MapPinLine size={22} />

              <span>Endereço de Entrega</span>

              <p>Informe o endereço onde deseja receber seu pedido</p>
            </CartBillingCardHeader>

            <CartAddressContainer>
              <Input
                type="text"
                placeholder="CEP"
                {...register('zipCode', { required: true })}
              />
              <Input
                type="text"
                placeholder="Rua"
                {...register('street', { required: true })}
              />
              <Input
                type="text"
                placeholder="Número"
                inputMode="numeric"
                {...register('number', { required: true })}
              />
              <Input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <Input
                type="text"
                placeholder="Bairro"
                {...register('neighborhood', { required: true })}
              />
              <Input
                type="text"
                placeholder="Cidade"
                {...register('city', { required: true })}
              />
              <Input
                type="text"
                placeholder="UF"
                {...register('state', { required: true })}
              />
            </CartAddressContainer>
          </CartBillingCard>

          <CartBillingCard>
            <CartBillingCardHeader variant="payment">
              <CurrencyDollar size={22} />

              <span>Pagamento</span>

              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </CartBillingCardHeader>

            <CartPaymentMethodContainer>
              <input
                type="radio"
                id="creditCard"
                value="credit-card"
                {...register('payment', { required: true })}
              />
              <label htmlFor="creditCard">
                <CreditCard size={16} />
                Cartão de Crédito
              </label>

              <input
                type="radio"
                id="debitCard"
                value="debit-card"
                {...register('payment', { required: true })}
              />
              <label htmlFor="debitCard">
                <Bank size={16} />
                Cartão de Débito
              </label>

              <input
                type="radio"
                id="money"
                value="money"
                {...register('payment', { required: true })}
              />
              <label htmlFor="money">
                <Money size={16} />
                Dinheiro
              </label>
            </CartPaymentMethodContainer>
          </CartBillingCard>
        </CartBillingContainer>
      </CartSection>

      <CartSection>
        <h3>Cafés selecionados</h3>

        <CartReceiptContainer>
          {cartList.map((cartItem) => (
            <CartItem key={cartItem.id} product={cartItem} />
          ))}

          <CartCheckoutTotalContainer>
            <CartCheckoutTotalItem>
              <span>Total de itens</span>
              <span>R$ {cartItemsTotalPrice}</span>
            </CartCheckoutTotalItem>

            <CartCheckoutTotalItem>
              <span>Entrega</span>
              <span>R$ ${deliveryCostPrice}</span>
            </CartCheckoutTotalItem>

            <CartCheckoutTotal>
              <span>Total</span>
              <span>R$ {totalPrice}</span>
            </CartCheckoutTotal>
          </CartCheckoutTotalContainer>

          <ConfirmOrderButton type="submit">
            confirmar pedido
          </ConfirmOrderButton>
        </CartReceiptContainer>
      </CartSection>
    </CartContainer>
  );
}
