import { MapPin, ShoppingCart } from 'phosphor-react';

import {
  HeaderActions,
  HeaderContainer,
  Location,
  ShoppingCartAmount,
  ShoppingCartButton,
} from './Header.styles';

import CoffeeDeliveryLogo from '@/assets/images/logo-coffee-delivery.png';

export function Header() {
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

          <ShoppingCartAmount>3</ShoppingCartAmount>
        </ShoppingCartButton>
      </HeaderActions>
    </HeaderContainer>
  );
}
