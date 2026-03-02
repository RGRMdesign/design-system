# React Vite Consumer Example

This app demonstrates a realistic external consumer setup for the design
system packages.

It uses React + Vite + TypeScript to reflect a common production consumer setup.

## Why this is realistic

- It is not part of `pnpm-workspace.yaml`, and `.npmrc` disables workspace linking.
- It installs `@rgrmdesign` packages with semver ranges.
- It imports `@rgrmdesign/ds-styles` exactly like an external app should.

## Run locally

From this folder:

```bash
pnpm install --ignore-workspace
pnpm dev
```

Build for CI or release validation:

```bash
pnpm typecheck
pnpm build
```
