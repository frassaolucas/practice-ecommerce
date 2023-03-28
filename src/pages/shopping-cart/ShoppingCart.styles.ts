import styled from 'styled-components';

import { Link } from 'react-router-dom';

type CartBillingCardHeaderProps = {
  variant: 'address' | 'payment';
};

type InputProps = {
  error?: boolean;
};

export const CartContainer = styled.form`
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 2rem;

  margin-bottom: 4rem;
`;

export const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    color: var(--color-base-subtitle);

    font-size: 1.125rem;
  }
`;

const CartContent = styled.div`
  padding: 2.5rem;

  background-color: var(--color-base-card);
`;

export const CartContentRounded = styled(CartContent)`
  border-radius: 6px;
`;

export const CartBillingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CartBillingCard = styled(CartContentRounded)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CartBillingCardHeader = styled.div<CartBillingCardHeaderProps>`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(2, 1fr) min-content;
  column-gap: 0.75rem;

  p {
    font-size: 0.875rem;

    &.error {
      color: var(--color-error);
    }
  }

  svg {
    grid-column: 1 / 2;
    grid-row: 1 / -1;

    color: ${(props) =>
      props.variant === 'address'
        ? 'var(--color-yellow-dark)'
        : 'var(--color-purple)'};
  }
`;

export const CartAddressContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(33%, 1fr) 1fr 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
`;

export const Input = styled.input<InputProps>`
  padding: 0.75rem;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.error ? 'var(--color-error)' : 'var(--color-base-input)'};
  border-radius: 4px;

  background: var(--color-base-input);

  &:nth-child(2) {
    grid-column: 1 / -1;
  }

  &:nth-child(4) {
    grid-column: span 2;
  }

  &:active,
  &:focus {
    ${(props) => !props.error && 'border-color: var(--color-yellow-dark);'}
  }
`;

export const CartPaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  input[type='radio'] {
    position: fixed;

    width: 0;

    opacity: 0;
  }

  label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;

    border-radius: 6px;
    border: 1px solid var(--color-base-button);

    background-color: var(--color-base-button);

    font-size: 0.75rem;
    text-transform: uppercase;

    cursor: pointer;

    transition: border-color 0.2s ease, background-color 0.2s ease;

    &:hover,
    &:focus {
      border-color: var(--color-base-hover);

      background-color: var(--color-base-hover);
    }
  }

  /* input interaction changing label */
  input[type='radio']:checked + label {
    border-color: var(--color-purple);

    background-color: var(--color-purple-light);
  }

  svg {
    color: var(--color-purple);
  }
`;

export const CartReceiptContainer = styled(CartContent)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 6px 44px;
`;

export const CartCheckoutTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  color: var(--color-base-tex);
`;

export const CartCheckoutTotalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartCheckoutTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--color-base-subtitle);

  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;

  padding: 0.75rem;

  border: 0;
  border-radius: 6px;

  background-color: var(--color-yellow);
  color: var(--color-white);

  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-yellow-dark);
  }
`;

export const EmptyCart = styled(CartContentRounded)`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 4rem;

  text-align: center;
`;

export const EmptyCartLink = styled(Link)`
  padding: 0.5rem 0.75rem;

  border-radius: 6px;
  border: 1px solid var(--color-yellow);

  color: var(--color-yellow);

  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;

  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: var(--color-yellow);
    color: var(--color-white);
  }
`;
