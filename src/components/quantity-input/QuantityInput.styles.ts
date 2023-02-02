import styled from 'styled-components';

type QuantityInputContainerProps = {
  type?: string;
};

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  position: relative;

  max-width: 5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border: 1px solid var(--color-base-button);
  border-radius: 4px;

  background: var(--color-base-input);
  color: var(--color-base-label);

  input {
    width: 100%;

    border: 0;

    background: transparent;

    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
    }
  }

  button {
    display: flex;
    place-content: center;

    border: 0;

    color: var(--color-purple);
  }
`;
