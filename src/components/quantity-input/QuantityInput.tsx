import { Minus, Plus } from 'phosphor-react';

import { useQuantityInput } from './QuantityInput.hooks';
import { QuantityInputContainer } from './QuantityInput.styles';
import { InputProps } from './QuantityInput.types';

export function QuantityInput({ initialValue, onQuantityChange }: InputProps) {
  const {
    quantity,
    handleChangeQuantity,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  } = useQuantityInput({ initialValue, onQuantityChange });

  return (
    <QuantityInputContainer>
      <button type="button" onClick={handleDecreaseNumberValue}>
        <Minus size={14} />
      </button>

      <input type="number" value={quantity} onChange={handleChangeQuantity} />

      <button type="button" onClick={handleIncreaseNumberValue}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}
