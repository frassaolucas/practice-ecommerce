import { Minus, Plus } from 'phosphor-react';

import { useQuantityInput } from './QuantityInput.hooks';
import { QuantityInputContainer } from './QuantityInput.styles';
import { InputProps } from './QuantityInput.types';

export function QuantityInput({ value, onQuantityChange }: InputProps) {
  const {
    handleChangeQuantity,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  } = useQuantityInput({ value, onQuantityChange });

  return (
    <QuantityInputContainer>
      <button type="button" onClick={handleDecreaseNumberValue}>
        <Minus size={14} />
      </button>

      <input type="number" value={value} onChange={handleChangeQuantity} />

      <button type="button" onClick={handleIncreaseNumberValue}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}
