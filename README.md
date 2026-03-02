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
- `pnpm dev:consumer` – React/Vite consumer example installeren + starten
- `pnpm typecheck:consumer` – React/Vite consumer example typechecken
- `pnpm build:consumer` – React/Vite consumer example installeren + builden
- `pnpm verify` – lint + typecheck + build + Storybook build
- `pnpm changeset` – release-entry toevoegen voor packagewijzigingen
- `pnpm changeset:status` – controle van pending releasewijzigingen

## Consumer example app

Voor een realistische simulatie van een extern project staat een voorbeeld-app in
`examples/react-vite-consumer`.

Deze app zit bewust buiten `pnpm-workspace.yaml` zodat er geen `workspace:*`
linking plaatsvindt en de setup dichter bij een echte consumer ligt.

### Doel van de voorbeeldapp

- consumeert gepubliceerde `@rgrmdesign` packages zoals een extern project
- valideert React + Vite + TypeScript integratie
- werkt als smoke test voor package releases

### Gebruik

- Start lokaal: `pnpm dev:consumer`
- Typecheck: `pnpm typecheck:consumer`
- Productiebuild: `pnpm build:consumer`

Zie ook de app-specifieke documentatie: `examples/react-vite-consumer/README.md`.

## Releasen en changelog

Deze repo gebruikt [Changesets](https://github.com/changesets/changesets) voor packageversies en changelogs.

1. Maak codewijzigingen in packages.
2. Voeg een changeset toe met `pnpm changeset`.
3. Commit en merge naar `main`.
4. Workflow `.github/workflows/publish.yml` maakt automatisch een release-PR met:
   - version bumps
   - bijgewerkte package changelogs
5. Na merge van die release-PR publiceert dezelfde workflow de packages.

### Kwaliteit van changelog-teksten

Schrijf changeset summaries vanuit gebruikersimpact:

- **what changed:** welke package en welke capability
- **why:** waarom dit nuttig is voor consumers
- **migration note:** alleen bij breaking changes

Voorbeeld:

`add button size token aliases and expose them in ds-styles for consistent component spacing`

## Releasebeleid voor dit monorepo

- Publishbare packages:
  - `@rgrmdesign/ds-tokens`
  - `@rgrmdesign/ds-styles`
  - `@rgrmdesign/ds-components-react`
  - `@rgrmdesign/ds-components-html`
- App package `apps/storybook` blijft private en wordt niet gepubliceerd.
- Interne dependencies worden automatisch als `patch` bijgewerkt bij versieverhogingen.

## Security van publiceren

- Gebruik bij voorkeur npm trusted publishing (OIDC) op package-niveau.
- Tot OIDC volledig actief is: gebruik `NPM_TOKEN` als environment secret `publish`, met korte levensduur.
- Verwijder tijdelijke tokens direct na succesvolle publicatie.

## Storybook hosting en previews

- Productie Storybook wordt gedeployed via `.github/workflows/storybook-pages.yml` naar GitHub Pages bij elke push naar `main`.
- PR previews draaien via `.github/workflows/chromatic.yml`.
- Vereiste GitHub secret voor previews: `CHROMATIC_PROJECT_TOKEN`.

### Eenmalige GitHub Pages setup

1. Ga naar repository **Settings** > **Pages**.
2. Kies **Build and deployment** op **GitHub Actions**.
3. Na de eerste succesvolle run staat de publieke Storybook URL in de `deploy` job output.
