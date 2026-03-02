import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Design token color palette across primitive and semantic layers. Values are exposed as CSS custom properties (e.g. `--ds-semantic-color-background-canvas`).',
      },
    },
  },
};

export default meta;

const colorGroups = [
  {
    name: 'Semantic Background',
    tokens: ['--ds-semantic-color-background-canvas', '--ds-semantic-color-background-subtle'],
  },
  {
    name: 'Semantic Text',
    tokens: ['--ds-semantic-color-text-primary', '--ds-semantic-color-text-secondary'],
  },
  {
    name: 'Semantic Action',
    tokens: ['--ds-semantic-color-action-primary-default', '--ds-semantic-color-action-primary-hover'],
  },
  {
    name: 'Semantic Border',
    tokens: ['--ds-semantic-color-border-default', '--ds-semantic-color-border-danger'],
  },
  {
    name: 'Primitive Neutral',
    tokens: ['--ds-primitives-color-neutral-0', '--ds-primitives-color-gray-900'],
  },
];

function ColorSwatch({ token }: { token: string }) {
  const value = typeof document !== 'undefined'
    ? getComputedStyle(document.documentElement).getPropertyValue(token).trim()
    : '';
  const isBg = token.includes('background') || token.includes('action');
  return (
    <div style={{ marginBottom: 8 }}>
      <div
        style={{
          width: 64,
          height: 40,
          borderRadius: 4,
          backgroundColor: isBg ? `var(${token})` : undefined,
          color: isBg ? undefined : `var(${token})`,
          border: isBg ? '1px solid #eee' : 'none',
          marginBottom: 4,
        }}
      >
        {!isBg && <span style={{ fontSize: 12 }}>Aa</span>}
      </div>
      <code style={{ fontSize: 12 }}>{token}</code>
      {value && <div style={{ fontSize: 11, color: '#666' }}>{value}</div>}
    </div>
  );
}

export const Palette: StoryObj = {
  render: () => (
    <div>
      {colorGroups.map((group) => (
        <section key={group.name} style={{ marginBottom: 24 }}>
          <h3 style={{ marginBottom: 12, fontSize: 16 }}>{group.name}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {group.tokens.map((token) => (
              <ColorSwatch key={token} token={token} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
