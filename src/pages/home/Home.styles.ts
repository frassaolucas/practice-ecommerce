import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin-bottom: 4rem;
`;

export const IntroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(29.75rem, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 3.5rem;
  row-gap: 4.125rem;
  align-items: center;

  padding-top: 5.875rem;
  padding-bottom: 5.875rem;
`;

export const IntroTitle = styled.div`
  grid-column: 1;
  grid-row: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: var(--color-base-title);

    font-family: var(--font-family-header);
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const IntroItems = styled.ul`
  grid-column: 1;
  grid-row: 2;

  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .item-icon {
    flex-shrink: 0;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    &--one {
      background-color: var(--color-yellow-dark);
    }
    &--two {
      background-color: var(--color-base-text);
    }
    &--three {
      background-color: var(--color-yellow);
    }
    &--four {
      background-color: var(--color-purple);
    }
  }
`;

export const IntroImage = styled.img`
  grid-column: 2;
  grid-row: 1 / -1;
`;

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    color: var(--color-base-subtitle);

    font-size: 2rem;
    font-weight: 800;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  justify-content: center;
  column-gap: 1rem;
  row-gap: 2.5rem;
`;
