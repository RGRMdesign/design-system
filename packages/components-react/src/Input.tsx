import React, { type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  ariaDescribedBy?: string;
}

export function Input({
  invalid,
  ariaDescribedBy,
  className = '',
  ...rest
}: InputProps) {
  const classes = ['ds-input'];
  if (className) classes.push(className);

  return React.createElement('input', {
    className: classes.join(' '),
    'aria-invalid': invalid,
    'aria-describedby': ariaDescribedBy,
    ...rest,
  });
}
