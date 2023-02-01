import { ChangeEvent, useRef, useState } from 'react';
import { InputProps } from './QuantityInput.types';

export function useQuantityInput(props: InputProps) {
  const { value = 0, onChange } = props;

  const [numberValue, setNumberValue] = useState<number>(value as number);

  const inputRef = useRef<HTMLInputElement>(null);

  function onChangeNumberValue(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);

    setNumberValue(value);
    onChange && onChange(value);
  }

  function handleDecreaseNumberValue() {
    const decreasedValue = numberValue - 1 < 0 ? 0 : numberValue - 1;

    setNumberValue(decreasedValue);
    onChange && onChange(decreasedValue);
  }

  function handleIncreaseNumberValue() {
    const increasedValue = numberValue + 1;

    setNumberValue(increasedValue);
    onChange && onChange(increasedValue);
  }

  return {
    numberValue,
    inputRef,
    onChangeNumberValue,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  };
}
