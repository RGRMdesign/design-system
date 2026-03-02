import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField, Input } from '@rgrmdesign/ds-components-react';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Label + input + optional help/error. **Do:** Use one FormField per form control; associate label via `htmlFor`/`id`. **A11y:** `aria-describedby` links input to help and error ids; set `aria-invalid` when showing an error.',
      },
    },
  },
  argTypes: {
    label: {
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
      description: 'Tekst van het label.',
    },
    id: {
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
      description: 'Id voor label/input; wordt gegenereerd indien niet gezet.',
    },
    error: {
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
      description: 'Fouttekst; zet aria-invalid op de child en toont error-block.',
    },
    help: {
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
      description: 'Helptekst onder het veld.',
    },
    required: {
      control: 'boolean',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
      description: 'Toont * bij het label.',
    },
    children: {
      table: {
        category: 'Props',
        type: { summary: 'ReactElement' },
      },
      description: 'Eén kind (bijv. <Input />); krijgt id, aria-describedby, invalid door FormField. Zonder React: ds-form-field, ds-form-field__label, ds-form-field__input-wrapper, ds-form-field__help, ds-form-field__error.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof FormField> = {
  args: { label: 'Email', help: "We'll never share your email." },
  render: (args) => (
    <FormField {...args}>
      <Input type="email" placeholder="you@example.com" />
    </FormField>
  ),
};

export const WithError: StoryObj<typeof FormField> = {
  args: { label: 'Password', error: 'Password must be at least 8 characters.' },
  render: (args) => (
    <FormField {...args}>
      <Input type="password" placeholder="••••••••" />
    </FormField>
  ),
};

export const Required: StoryObj<typeof FormField> = {
  args: { label: 'Name', required: true },
  render: (args) => (
    <FormField {...args}>
      <Input type="text" placeholder="Your name" />
    </FormField>
  ),
};
