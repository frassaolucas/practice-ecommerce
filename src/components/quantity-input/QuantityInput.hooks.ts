import { ChangeEvent, useEffect, useState } from 'react';

import { InputProps } from './QuantityInput.types';

export function useQuantityInput({
  initialValue = 0,
  onQuantityChange,
}: InputProps) {
  const [quantity, setQuantity] = useState<number>(initialValue);

  useEffect(() => {
    setQuantity(Number(initialValue));
  }, [initialValue]);

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    const newQuantity = parseInt(event.target.value);

    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  }

  function handleDecreaseNumberValue() {
    const decreasedValue = quantity - 1 < 0 ? 0 : quantity - 1;

    setQuantity(decreasedValue);
    onQuantityChange(decreasedValue);
  }

  function handleIncreaseNumberValue() {
    const increasedValue = quantity + 1;

    setQuantity(increasedValue);
    onQuantityChange(increasedValue);
  }

  return {
    quantity,
    handleChangeQuantity,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  };
}
