import { ShoppingCart } from 'phosphor-react';

import { QuantityInput } from '@/components/quantity-input';

import { useShopItem } from './ShopItem.hooks';
import {
  AddToCartButton,
  ShopItemBuyActions,
  ShopItemBuyContainer,
  ShopItemContainer,
  ShopItemDescription,
  ShopItemImage,
  ShopItemName,
  ShopItemPrice,
  ShopItemTag,
  ShopItemTagsContainer,
} from './ShopItem.styles';
import { ShopItemProps } from './ShopItem.types';

export function ShopItem({ data }: ShopItemProps) {
  const { productData, quantity, handleChangeQuantity, handleAddToCart } =
    useShopItem({
      data,
    });

  return (
    <ShopItemContainer>
      <ShopItemImage src={productData.image} />

      <ShopItemTagsContainer>
        {productData.tags.map((tag) => (
          <ShopItemTag key={tag}>{tag}</ShopItemTag>
        ))}
      </ShopItemTagsContainer>

      <ShopItemName>{productData.name}</ShopItemName>

      <ShopItemDescription>{productData.description}</ShopItemDescription>

      <ShopItemBuyContainer>
        <ShopItemPrice>
          R$ <span>{productData.price}</span>
        </ShopItemPrice>

        <ShopItemBuyActions>
          <QuantityInput onChange={handleChangeQuantity} />

          <AddToCartButton onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={18} />
          </AddToCartButton>
        </ShopItemBuyActions>
      </ShopItemBuyContainer>
    </ShopItemContainer>
  );
}
