# @rgrmdesign/ds-components-html

HTML snippets for Design System components. No JavaScript—markup only.

- Use the same `.ds-*` classes as the React components; styling comes from **@rgrmdesign/ds-styles**.
- In your app: install `@rgrmdesign/ds-styles` and import its CSS (e.g. `import '@rgrmdesign/ds-styles'` or link the bundle), then copy-paste or generate these snippets.

## A11y

- **Label ↔ input:** Always use a `<label>` with `for` matching the input `id`.
- **Help / error:** Give help and error elements stable `id`s and set the input’s `aria-describedby` to those ids (space-separated if both).
- **Invalid:** Set `aria-invalid="true"` on the input when there is a validation error; pair with `role="alert"` on the error message.

## Snippets

- `snippets/button.html` – Button variants and states
- `snippets/input.html` – Input with label and help/error
- `snippets/form-field.html` – FormField (label + input + help/error)
