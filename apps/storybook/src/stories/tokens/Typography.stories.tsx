import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography tokens: font family, sizes, and weights. Used via CSS variables (e.g. `--ds-typography-font-size-md`).',
      },
    },
  },
};

export default meta;

export const FontFamily: StoryObj = {
  render: () => (
    <p style={{ fontFamily: 'var(--ds-typography-font-family-sans)' }}>
      The quick brown fox jumps over the lazy dog. (system-ui, sans-serif)
    </p>
  ),
};

export const FontSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p style={{ fontSize: 'var(--ds-typography-font-size-sm)' }}>Small (--ds-typography-font-size-sm)</p>
      <p style={{ fontSize: 'var(--ds-typography-font-size-md)' }}>Medium (--ds-typography-font-size-md)</p>
      <p style={{ fontSize: 'var(--ds-typography-font-size-lg)' }}>Large (--ds-typography-font-size-lg)</p>
    </div>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p style={{ fontWeight: 'var(--ds-typography-font-weight-normal)' }}>Normal (400)</p>
      <p style={{ fontWeight: 'var(--ds-typography-font-weight-bold)' }}>Bold (700)</p>
    </div>
  ),
};
