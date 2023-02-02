import { useEffect, useMemo, useRef } from 'react';

import { InputProps } from './QuantityInput.types';

export function useQuantityInput({ defaultValue = '0' }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.setAttribute('value', String(defaultValue));
  }, []);

  const changeEvent = useMemo(() => {
    return new Event('change', { bubbles: true });
  }, []);

  function handleDecreaseNumberValue() {
    if (!inputRef.current) return;

    const value = Number(inputRef.current.value);
    const decreasedValue = value - 1 < 0 ? 0 : value - 1;

    inputRef.current.setAttribute('value', String(decreasedValue));
    inputRef.current.dispatchEvent(changeEvent);
  }

  function handleIncreaseNumberValue() {
    if (!inputRef.current) return;

    const value = Number(inputRef.current.value);
    const increasedValue = value + 1;

    inputRef.current.setAttribute('value', String(increasedValue));
    inputRef.current.dispatchEvent(changeEvent);
  }

  return {
    inputRef,
    handleDecreaseNumberValue,
    handleIncreaseNumberValue,
  };
}
