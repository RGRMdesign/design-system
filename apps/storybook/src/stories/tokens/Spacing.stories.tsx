import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Tokens/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Spacing scale used for padding, margin, and gaps. CSS variables: `--ds-spacing-xs` through `--ds-spacing-lg`.',
      },
    },
  },
};

export default meta;

const spacingTokens = [
  { name: 'xs', var: '--ds-spacing-xs' },
  { name: 'sm', var: '--ds-spacing-sm' },
  { name: 'md', var: '--ds-spacing-md' },
  { name: 'lg', var: '--ds-spacing-lg' },
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
              backgroundColor: 'var(--ds-color-action-primary)',
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
