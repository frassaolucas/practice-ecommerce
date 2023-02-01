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

export function ShopItem({ data, onChangeQuantity }: ShopItemProps) {
  const { productData } = useShopItem({ data });

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
          <QuantityInput
            type="number"
            value={productData.quantity}
            onChange={(value: number) => onChangeQuantity(value)}
          />

          <AddToCartButton>
            <ShoppingCart weight="fill" size={18} />
          </AddToCartButton>
        </ShopItemBuyActions>
      </ShopItemBuyContainer>
    </ShopItemContainer>
  );
}
