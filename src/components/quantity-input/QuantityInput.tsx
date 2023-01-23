import { Minus, Plus } from 'phosphor-react';

import { useQuantityInput } from './QuantityInput.hooks';
import { QuantityInputContainer } from './QuantityInput.styles';
import { InputProps } from './QuantityInput.types';

export function QuantityInput({ type, value, onChange, ...props }: InputProps) {
  const {
    numberValue,
    inputRef,
    onChangeNumberValue,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  } = useQuantityInput({ type, value, onChange, ...props });

  return (
    <QuantityInputContainer type={type}>
      <button type="button" onClick={handleDecreaseNumberValue}>
        <Minus size={14} />
      </button>

      <input
        ref={inputRef}
        type={type}
        value={numberValue}
        onChange={onChangeNumberValue}
        {...props}
      />

      <button type="button" onClick={handleIncreaseNumberValue}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}
