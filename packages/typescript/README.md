# @bidi82/eslint-config-javascript

bd82's Shareable ESLint configurations for TypeScript.

This extends `@bidi82/eslint-config-javascript` shared configuration with additional TypeScript specific rules and settings.
There is no need to explicitly install the JavaScript configuration when using this package.

## Installation

```bash
npm install --save-dev @bidi82/eslint-config-typescript
# or
yarn add --dev @bidi82/eslint-config-typescript
# or
pnpm install --dev @bidi82/eslint-config-typescript
```

## Usage

This is an ESM only package.
It exports a two [eslint flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files) objects.

- `withoutTypeChecks` - The basic ruleset.
- `withTypeChecks` - extends `withoutTypeChecks` @eslint-typescript [rules which require type information](https://typescript-eslint.io/getting-started/typed-linting).

```javascript
// eslint.config.mjs

import { withoutTypeChecks } from "@bidi82/eslint-config-typescript";

export default [
  // shared config would normally be included **first**
  ...withoutTypeChecks,
];
```

```javascript
// eslint.config.mjs

import { withTypeChecks } from "@bidi82/eslint-config-typescript";

export default [
  // shared config would normally be included **first**
  ...withTypeChecks,
  // The `withTypeChecks` config requires additional settings for the TypeScript parser.
  // - See: https://typescript-eslint.io/getting-started/typed-linting for details
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // Your project eslint configs below:
  // Example of additional config for specific project `ignores`
  {
    ignores: ["**/out/"],
  },
];
```
