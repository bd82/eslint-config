/**
 * @typedef {import("eslint").Linter.Config} ESLintConfig
 * @typedef {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} TsFlatConfig
 */

import jsConfigs from "@bidi82/eslint-config-javascript";
import tseslint from "typescript-eslint";

/**
 * @type {(ESLintConfig | TsFlatConfig)[]}
 */
const withoutTypeChecks = [...jsConfigs, ...tseslint.configs.recommended];
const withTypeChecks = [
  ...jsConfigs,
  // https://typescript-eslint.io/getting-started/typed-linting
  ...tseslint.configs.recommendedTypeChecked,
];

export default {
  noTypeChecks: withoutTypeChecks,
  typeChecks: withTypeChecks,
};
