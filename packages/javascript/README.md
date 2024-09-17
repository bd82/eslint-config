# @bidi82/eslint-config-javascript

bd82's Shareable ESLint configurations for JavaScript.

## Installation

```bash
npm install --save-dev @bidi82/eslint-config-javascript
# or
yarn add --dev @bidi82/eslint-config-javascript
# or
pnpm install --dev @bidi82/eslint-config-javascript
```

## Usage

This is an ESM only package.
It exports a single **default** [eslint flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files) object.

```javascript
// eslint.config.mjs

import commonConfig from "@bidi82/eslint-config-javascript";
import globals from "globals";

export default [
  // shared config would normally be included **first**
  ...commonConfig,
  // Your project eslint configs below:
  // 1. Example of additional config for specific project `globals`
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
  },
  // 2. Example of additional config for specific project `ignores`
  {
    ignores: ["**/dist/"],
  },
];
```
