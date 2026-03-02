import React, { type ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = ['ds-button', `ds-button--${variant}`];
  if (loading) classes.push('is-loading');
  if (className) classes.push(className);

  return React.createElement(
    'button',
    {
      type: 'button',
      className: classes.join(' '),
      disabled: disabled ?? loading,
      'aria-busy': loading,
      ...rest,
    },
    children
  );
}
