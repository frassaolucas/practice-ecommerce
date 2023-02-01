import { MapPin, ShoppingCart } from 'phosphor-react';

import { useHeader } from './Header.hooks';

import {
  HeaderActions,
  HeaderContainer,
  Location,
  ShoppingCartAmount,
  ShoppingCartButton,
} from './Header.styles';

import CoffeeDeliveryLogo from '@/assets/images/logo-coffee-delivery.png';

export function Header() {
  const { cartList } = useHeader();

  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} />

      <HeaderActions>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Florianópolis, SC</span>
        </Location>

        <ShoppingCartButton>
          <ShoppingCart size={22} weight="fill" />

          <ShoppingCartAmount>{cartList.length}</ShoppingCartAmount>
        </ShoppingCartButton>
      </HeaderActions>
    </HeaderContainer>
  );
}
