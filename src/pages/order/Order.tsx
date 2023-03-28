import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import { useOrderPage } from './Order.hooks';
import {
  OrderContainer,
  OrderHeader,
  OrderInfo,
  OrderInfoItem,
} from './Order.styles';

import DeliveryImage from '@/assets/images/delivery.png';

export function OrderPage() {
  const { order } = useOrderPage();

  return (
    <OrderContainer>
      <OrderHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderHeader>

      <OrderInfo>
        <OrderInfoItem>
          <div className="item-icon item-icon--one">
            <MapPin size={16} weight="fill" />
          </div>

          <span>
            Entrega em{' '}
            <strong>
              {order?.address.street}, {order?.address.number}
            </strong>
            <br />
            {order?.address.neighborhood} - {order?.address.city},{' '}
            {order?.address.state}
          </span>
        </OrderInfoItem>

        <OrderInfoItem>
          <div className="item-icon item-icon--two">
            <Timer size={16} weight="fill" />
          </div>

          <span>
            Previsão de entrega
            <br />
            <strong>20 min - 30 min</strong>
          </span>
        </OrderInfoItem>

        <OrderInfoItem>
          <div className="item-icon item-icon--two">
            <CurrencyDollar size={16} />
          </div>

          <span>
            Pagamento na entrega
            <br />
            <strong>{order?.payment}</strong>
          </span>
        </OrderInfoItem>
      </OrderInfo>

      <img src={DeliveryImage} alt="Scooter entregando pedido" />
    </OrderContainer>
  );
}
