# Contributing

Deze repository gebruikt een branch + PR workflow. Dat geldt extra voor design tokens uit Figma/Tokens Studio.

## Figma / Tokens Studio workflow

1. **Werk nooit direct op `main`**
   - Maak een branch, bij voorkeur met prefix `tokens/`, bijvoorbeeld:
     - `tokens/button-hover-color`
     - `tokens/formfield-spacing-adjustments`

2. **Wijzig tokens in Figma/Tokens Studio**
   - Houd de gelaagdheid aan:
     - `primitives` -> `semantic` -> `components`
   - Gebruik bij voorkeur aliases en vermijd losse, hardcoded waarden op componentniveau.

3. **Sync/export naar deze repo**
   - Schrijf wijzigingen naar:
     - `packages/tokens/src/tokens/design-tokens.json`
   - Dit bestand is de bron voor de build pipeline (Style Dictionary).

4. **Valideer lokaal**
   - Draai:
     - `pnpm build`
     - `pnpm verify`
   - Controleer of token-output en afhankelijke packages correct bouwen.

5. **Voeg een changeset toe**
   - Gebruik `pnpm changeset`.
   - Beschrijf kort de gebruikersimpact (wat verandert er en waarom).

6. **Open een PR naar `main`**
   - Vraag review aan.
   - Merge alleen na geslaagde checks.

## Waarom deze werkwijze

- Workflows voor publish en Storybook draaien op `main`.
- Via PR's blijven tokenwijzigingen traceerbaar, reviewbaar en reproduceerbaar.
- Changesets zorgen voor gecontroleerde versies en changelogs.
