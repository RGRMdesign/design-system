# Design System Monorepo

pnpm-workspace monorepo met design tokens, styles en componenten (React + HTML). Zie [IMPLEMENTATION_NOTES.md](./IMPLEMENTATION_NOTES.md) voor architectuur.

## Vereisten

- **Node.js** ≥ 22 (LTS)
- **pnpm** ≥ 9

Gebruik in de projectroot `nvm use` of `fnm use` om de juiste Node-versie te activeren (zie `.nvmrc` / `.node-version`). Bij `pnpm install` wordt gecontroleerd of je Node- en pnpm-versie voldoen (`engine-strict` in `.npmrc`).

## Scripts

- `pnpm install` – dependencies installeren
- `pnpm build` – alle packages bouwen
- `pnpm dev` – build + Storybook starten op http://localhost:6006
