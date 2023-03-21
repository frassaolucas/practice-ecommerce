import { ChangeEvent } from 'react';

import { InputProps } from './QuantityInput.types';

export function useQuantityInput({ value = 0, onQuantityChange }: InputProps) {
  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    const newQuantity = parseInt(event.target.value);

    onQuantityChange(newQuantity);
  }

  function handleDecreaseNumberValue() {
    const decreasedValue = value - 1 < 0 ? 0 : value - 1;

    onQuantityChange(decreasedValue);
  }

  function handleIncreaseNumberValue() {
    const increasedValue = value + 1;

    onQuantityChange(increasedValue);
  }

  return {
    handleChangeQuantity,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  };
}
