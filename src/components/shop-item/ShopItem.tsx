import { QuantityInput } from '@/components/quantity-input';
import { ShoppingCart } from 'phosphor-react';

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

export function ShopItem() {
  return (
    <ShopItemContainer>
      <ShopItemImage src="https://picsum.photos/120" />

      <ShopItemTagsContainer>
        <ShopItemTag>tradicional</ShopItemTag>
        <ShopItemTag>com leite</ShopItemTag>
      </ShopItemTagsContainer>

      <ShopItemName>Café com Leite</ShopItemName>

      <ShopItemDescription>
        Meio a meio de expresso tradicional com leite vaporizado
      </ShopItemDescription>

      <ShopItemBuyContainer>
        <ShopItemPrice>
          R$ <span>9,90</span>
        </ShopItemPrice>

        <ShopItemBuyActions>
          <QuantityInput
            type="number"
            onChange={(value: number) => console.log('value', value)}
          />

          <AddToCartButton>
            <ShoppingCart weight="fill" size={18} />
          </AddToCartButton>
        </ShopItemBuyActions>
      </ShopItemBuyContainer>
    </ShopItemContainer>
  );
}
