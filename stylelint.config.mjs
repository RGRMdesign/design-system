export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'import-notation': null,
    'selector-class-pattern': [
      '^ds-[a-z0-9]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*)|--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$|^is-[a-z0-9]+(?:-[a-z0-9]+)*$',
      {
        resolveNestedSelectors: true,
        message:
          'Gebruik .ds-* (incl. BEM) of .is-* voor state classes binnen het design system.',
      },
    ],
  },
};
