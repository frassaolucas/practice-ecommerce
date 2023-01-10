import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import {
  HomeContainer,
  IntroContainer,
  IntroImage,
  IntroItems,
  IntroTitle,
} from './Home.styles';

import IntroImg from '@/assets/images/intro-image.png';

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
        </IntroTitle>

        <IntroItems>
          <li>
            <div className="item-icon item-icon--one">
              <ShoppingCart weight="fill" color="#FAFAFA" />
            </div>
            Compra simples e segura
          </li>

          <li>
            <div className="item-icon item-icon--two">
              <Package weight="fill" color="#FAFAFA" />
            </div>
            Embalagem mantém o café intacto
          </li>

          <li>
            <div className="item-icon item-icon--three">
              <Timer weight="fill" color="#FAFAFA" />
            </div>
            Entrega rápida e rastreada
          </li>

          <li>
            <div className="item-icon item-icon--four">
              <Coffee weight="fill" color="#FAFAFA" />
            </div>
            O café chega fresquinho até você
          </li>
        </IntroItems>

        <IntroImage src={IntroImg} />
      </IntroContainer>
    </HomeContainer>
  );
}
