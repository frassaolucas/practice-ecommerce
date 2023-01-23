import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { InputProps } from './QuantityInput.types';

export function useQuantityInput(props: InputProps) {
  const { value = 0, onChange } = props;

  const [numberValue, setNumberValue] = useState<number>(value as number);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChange && onChange(numberValue);
  }, [numberValue]);

  function onChangeNumberValue(event: ChangeEvent<HTMLInputElement>) {
    setNumberValue(Number(event.target.value));
  }

  function handleDecreaseNumberValue() {
    setNumberValue((prevState) => (prevState - 1 < 0 ? 0 : prevState - 1));
  }

  function handleIncreaseNumberValue() {
    setNumberValue((prevState) => prevState + 1);
  }

  return {
    numberValue,
    inputRef,
    onChangeNumberValue,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  };
}
