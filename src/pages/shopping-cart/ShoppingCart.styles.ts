import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartContainer = styled.div`
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

export const CartCheckoutInfoContainer = styled(CartContent)`
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

  font-size: 0.875rem;
`;

export const CartCheckoutTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 700;
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;

  padding: 0.75rem;

  border-radius: 6px;
  border: 0;

  background-color: var(--color-yellow);
  color: var(--color-white);

  font-size: 0.875rem;
  text-transform: uppercase;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-yellow-dark);
  }
`;

export const EmptyCart = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 4rem;
  padding: 2.5rem;

  border-radius: 6px;

  background-color: var(--color-base-card);

  text-align: center;
`;

export const EmptyCartLink = styled(Link)`
  padding: 0.5rem 0.75rem;

  border-radius: 6px;
  border: 1px solid var(--color-yellow);

  color: var(--color-yellow);

  font-size: 0.875rem;
  text-decoration: none;
  text-transform: uppercase;

  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: var(--color-yellow);
    color: var(--color-white);
  }
`;
