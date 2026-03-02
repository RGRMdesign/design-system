import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography tokens across semantic and primitive layers. Used via CSS variables (e.g. `--ds-semantic-typography-body-font-size`).',
      },
    },
  },
};

export default meta;

export const FontFamily: StoryObj = {
  render: () => (
    <p style={{ fontFamily: 'var(--ds-semantic-typography-body-font-family)' }}>
      The quick brown fox jumps over the lazy dog. (system-ui, sans-serif)
    </p>
  ),
};

export const FontSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p style={{ fontSize: 'var(--ds-primitives-typography-font-size-100)' }}>Small (--ds-primitives-typography-font-size-100)</p>
      <p style={{ fontSize: 'var(--ds-semantic-typography-body-font-size)' }}>Body (--ds-semantic-typography-body-font-size)</p>
      <p style={{ fontSize: 'var(--ds-semantic-typography-heading-font-size-h1)' }}>Heading H1 (--ds-semantic-typography-heading-font-size-h1)</p>
    </div>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p style={{ fontWeight: 'var(--ds-semantic-typography-body-font-weight)' }}>Body (400)</p>
      <p style={{ fontWeight: 'var(--ds-semantic-typography-heading-font-weight)' }}>Heading (700)</p>
    </div>
  ),
};
