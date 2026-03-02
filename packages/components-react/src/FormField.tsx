import React, { useId, cloneElement, isValidElement } from 'react';

export interface FormFieldProps {
  label: string;
  id?: string;
  error?: string;
  help?: string;
  required?: boolean;
  children: React.ReactElement;
}

export function FormField({
  label,
  id: providedId,
  error,
  help,
  required,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const helpId = help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(' ') || undefined;

  type ChildProps = { id?: string; ariaDescribedBy?: string; invalid?: boolean };
  const inputChild = isValidElement(children)
    ? cloneElement(children as React.ReactElement<ChildProps>, {
        id: (children.props as ChildProps).id ?? id,
        ariaDescribedBy: (children.props as ChildProps).ariaDescribedBy ?? describedBy,
        invalid: (children.props as ChildProps).invalid ?? !!error,
      } as Partial<ChildProps>)
    : children;

  return React.createElement(
    'div',
    { className: 'ds-form-field' },
    React.createElement(
      'label',
      { htmlFor: id, className: 'ds-form-field__label' },
      label,
      required && React.createElement('span', { 'aria-hidden': 'true' }, ' *')
    ),
    React.createElement('div', { className: 'ds-form-field__input-wrapper' }, inputChild),
    help && React.createElement('div', { id: helpId, className: 'ds-form-field__help' }, help),
    error &&
      React.createElement(
        'div',
        { id: errorId, className: 'ds-form-field__error', role: 'alert' },
        error
      )
  );
}
