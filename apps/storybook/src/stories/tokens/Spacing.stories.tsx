import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Tokens/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Primitive spacing scale used for padding, margin, and gaps. CSS variables: `--ds-primitives-spacing-100` through `--ds-primitives-spacing-400`.',
      },
    },
  },
};

export default meta;

const spacingTokens = [
  { name: '100', var: '--ds-primitives-spacing-100' },
  { name: '200', var: '--ds-primitives-spacing-200' },
  { name: '300', var: '--ds-primitives-spacing-300' },
  { name: '400', var: '--ds-primitives-spacing-400' },
];

export const Scale: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
      {spacingTokens.map(({ name, var: v }) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: `var(${v})`,
              height: `var(${v})`,
              minHeight: 8,
              backgroundColor: 'var(--ds-semantic-color-action-primary-default)',
              opacity: 0.8,
              borderRadius: 4,
            }}
          />
          <code style={{ fontSize: 12 }}>{v}</code>
        </div>
      ))}
    </div>
  ),
};
