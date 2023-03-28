import styled from 'styled-components';

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 2.5rem;

  margin-top: 5rem;
`;

export const OrderHeader = styled.div`
  grid-column: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    color: var(--color-yellow-dark);
  }

  p {
    font-size: 1.25rem;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: 1px solid var(--color-purple-dark);
  border-radius: 6px 36px;
`;

export const OrderInfoItem = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.75rem;

  .item-icon {
    flex-shrink: 0;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: var(--color-background);

    &--one {
      background-color: var(--color-purple);
    }
    &--two {
      background-color: var(--color-yellow);
    }
    &--three {
      background-color: var(--color-yellow-dark);
    }
  }
`;
