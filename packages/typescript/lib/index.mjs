/**
 * @typedef {import("eslint").Linter.Config} ESLintConfig
 * @typedef {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} TsFlatConfig
 */
import {
  jsRulesConfig,
  linterOptionsConfig,
  prettierConfig,
} from "@bidi82/eslint-config-javascript";
import tseslint from "typescript-eslint";
import { testFilesRules } from "./test-files-rules.mjs";

export { withTypeChecks, withoutTypeChecks };

/**
 * @type {(ESLintConfig | TsFlatConfig)[]}
 */
const withoutTypeChecks = [
  ...jsRulesConfig,
  // https://typescript-eslint.io/getting-started/typed-linting
  ...tseslint.configs.recommended,
  testFilesRules,
  prettierConfig,
  linterOptionsConfig,
];

/**
 * @type {(ESLintConfig | TsFlatConfig)[]}
 */
const withTypeChecks = [
  ...jsRulesConfig,
  // https://typescript-eslint.io/getting-started/typed-linting
  ...tseslint.configs.recommendedTypeChecked,
  testFilesRules,
  prettierConfig,
  linterOptionsConfig,
];
