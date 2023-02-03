import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem;
  padding-bottom: 2rem;

  img {
    max-height: 2.5rem;
    height: 100%;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border-radius: 6px;

  background-color: var(--color-purple-light);
  color: var(--color-purple-dark);

  font-size: 0.875rem;
`;

export const ShoppingCartLink = styled(Link)`
  position: relative;

  display: flex;
  place-items: center;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  background-color: var(--color-yellow-light);
  color: var(--color-yellow-dark);

  cursor: pointer;
`;

export const ShoppingCartAmount = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: var(--color-yellow-dark);
  color: var(--color-white);

  font-size: 0.675rem;
  line-height: 1;

  transform: translate(50%, -50%);
`;
