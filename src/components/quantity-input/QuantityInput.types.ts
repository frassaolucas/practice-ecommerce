import { InputHTMLAttributes } from 'react';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type, value'
>;
