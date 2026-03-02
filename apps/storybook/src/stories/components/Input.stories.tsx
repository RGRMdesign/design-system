import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@rgrmdesign/ds-components-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '**Do:** Pair with a visible `<label>` and use `aria-describedby` for help/error. **Don’t:** Rely only on placeholder for label. **A11y:** Set `aria-invalid="true"` when there is a validation error.',
      },
    },
  },
  argTypes: {
    invalid: {
      control: 'boolean',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
      description: 'Zet aria-invalid; gebruik bij validatiefouten.',
    },
    disabled: {
      control: 'boolean',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
      description: 'Schakelt het veld uit.',
    },
    placeholder: {
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
      description: 'Placeholdertekst.',
    },
    'aria-describedby': {
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
      description: 'Id(s) van help- of fouttekst (aria-describedby).',
    },
    className: {
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      description: 'Extra CSS-classes. Zonder React: ds-input.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: { placeholder: 'Placeholder text' },
};

export const WithLabel: StoryObj<typeof Input> = {
  render: (args) => (
    <div>
      <label htmlFor="input-demo" style={{ display: 'block', marginBottom: 4 }}>
        Email
      </label>
      <Input id="input-demo" type="email" placeholder="you@example.com" {...args} />
    </div>
  ),
};

export const Invalid: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Email',
    invalid: true,
    'aria-describedby': 'err-msg',
  },
  render: (args) => (
    <div>
      <label htmlFor="input-invalid" style={{ display: 'block', marginBottom: 4 }}>
        Email
      </label>
      <Input id="input-invalid" {...args} />
      <div id="err-msg" role="alert" style={{ fontSize: 12, color: 'var(--ds-semantic-color-border-danger)', marginTop: 4 }}>
        Please enter a valid email.
      </div>
    </div>
  ),
};

export const Disabled: StoryObj<typeof Input> = {
  args: { placeholder: 'Disabled', disabled: true },
};
