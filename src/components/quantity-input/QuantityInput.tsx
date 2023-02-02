import { Minus, Plus } from 'phosphor-react';

import { useQuantityInput } from './QuantityInput.hooks';
import { QuantityInputContainer } from './QuantityInput.styles';
import { InputProps } from './QuantityInput.types';

export function QuantityInput(props: InputProps) {
  const { inputRef, handleDecreaseNumberValue, handleIncreaseNumberValue } =
    useQuantityInput(props);

  return (
    <QuantityInputContainer>
      <button type="button" onClick={handleDecreaseNumberValue}>
        <Minus size={14} />
      </button>

      <input ref={inputRef} type="number" {...props} />

      <button type="button" onClick={handleIncreaseNumberValue}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}
