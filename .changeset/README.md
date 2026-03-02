# Changesets in deze repo

Gebruik deze map voor release-entries die versies en changelogs aansturen.

## Workflow

1. Voeg bij packagewijzigingen een changeset toe met `pnpm changeset`.
2. Kies per package de semver-bump (`patch`, `minor`, `major`).
3. Schrijf een korte, consumer-gerichte summary.
4. Merge naar `main`; de publish-workflow maakt een release-PR.

## Semver-richtlijnen

- `patch`: bugfixes of niet-brekende interne verbeteringen.
- `minor`: nieuwe niet-brekende API, tokens, varianten of componentmogelijkheden.
- `major`: breaking changes in API, contracten, tokennamen of CSS-klassen.

## Schrijfstijl changelog

- Benoem altijd package(s) en impact.
- Vermijd interne implementatiedetails zonder gebruikerswaarde.
- Voeg bij breaking changes een korte migratiehint toe.
