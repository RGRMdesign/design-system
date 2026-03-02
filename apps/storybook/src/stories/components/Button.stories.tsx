import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@rgrmdesign/ds-components-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '**Do:** Use for actions (submit, cancel, confirm). **Don’t:** Use a link for in-page actions. **A11y:** Visible focus ring; use `disabled` and `aria-busy` when loading.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      table: {
        category: 'Props',
        type: { summary: "'primary' | 'secondary'" },
      },
      description: 'Visuele variant van de button.',
    },
    loading: {
      control: 'boolean',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: 'Toont loading-state; zet disabled en aria-busy.',
    },
    disabled: {
      control: 'boolean',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
      },
      description: 'Schakelt de button uit.',
    },
    children: {
      table: {
        category: 'Props',
        type: { summary: 'ReactNode' },
      },
      description: 'Label of inhoud van de button.',
    },
    className: {
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
      description: 'Extra CSS-classes. Zonder React: ds-button, ds-button--primary, ds-button--secondary, is-loading.',
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: { variant: 'primary', children: 'Primary button' },
};

export const Secondary: StoryObj<typeof Button> = {
  args: { variant: 'secondary', children: 'Secondary button' },
};

export const Disabled: StoryObj<typeof Button> = {
  args: { variant: 'primary', children: 'Disabled', disabled: true },
};

export const Loading: StoryObj<typeof Button> = {
  args: { variant: 'primary', children: 'Loading…', loading: true },
};
