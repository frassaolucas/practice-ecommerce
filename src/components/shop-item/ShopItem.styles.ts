import styled from 'styled-components';

export const ShopItemContainer = styled.div`
  width: 16rem;
  height: 19.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.5rem 1.25rem 1.5rem;

  border-radius: 6px 36px;

  background-color: var(--color-base-card);
`;

export const ShopItemImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  display: block;

  margin-top: -1.25rem;

  object-fit: contain;
`;

export const ShopItemTagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  margin-top: 0.5rem;
`;

export const ShopItemTag = styled.div`
  padding: 0.25rem 0.5rem;

  border-radius: 100px;

  background-color: var(--color-yellow-light);
  color: var(--color-yellow-dark);

  font-size: 0.625rem;
  text-transform: uppercase;
`;

export const ShopItemName = styled.div`
  margin-top: 0.75rem;

  color: var(--color-base-subtitle);

  font-size: 1.25rem;
`;

export const ShopItemDescription = styled.div`
  margin-top: 0.5rem;

  color: var(--color-base-label);

  font-size: 0.875rem;
  text-align: center;
`;

export const ShopItemBuyContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
`;

export const ShopItemPrice = styled.div`
  color: var(--color-base-text);

  font-size: 0.875rem;

  span {
    font-size: 1.5rem;
    font-weight: var(--font-weight-x-bold);
  }
`;

export const ShopItemBuyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-left: auto;
`;

export const AddToCartButton = styled.button`
  display: flex;
  place-content: center;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  background: var(--color-purple-dark);
  color: var(--color-base-card);
`;
