import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: repeat(2, max-content);
  column-gap: 1.25rem;
  row-gap: 0.5rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid var(--color-base-button);

  img {
    grid-row: 1 / -1;

    max-width: 4rem;
    width: 100%;
  }

  span {
    color: var(--color-base-subtitle);
  }
`;

export const CartItemsControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
