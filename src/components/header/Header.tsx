import { Link } from 'react-router-dom';

import { MapPin, ShoppingCart } from 'phosphor-react';

import { useHeader } from './Header.hooks';

import {
  HeaderActions,
  HeaderContainer,
  Location,
  ShoppingCartAmount,
  ShoppingCartLink,
} from './Header.styles';

import CoffeeDeliveryLogo from '@/assets/images/logo-coffee-delivery.png';

export function Header() {
  const { cartList } = useHeader();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeDeliveryLogo} />
      </Link>

      <HeaderActions>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Florianópolis, SC</span>
        </Location>

        <ShoppingCartLink to="/cart">
          <ShoppingCart size={22} weight="fill" />

          {!!cartList.length && (
            <ShoppingCartAmount>{cartList.length}</ShoppingCartAmount>
          )}
        </ShoppingCartLink>
      </HeaderActions>
    </HeaderContainer>
  );
}
