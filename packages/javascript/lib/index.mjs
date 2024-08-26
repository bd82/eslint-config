/**
 * @typedef {import("eslint").Linter.Config} ESLintConfig
 */
import js from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";
import { unicornDisabledRules } from "./unicorn-disabled-rules.mjs";
import { importConfig } from "./plugin-import-wrapper.mjs";

export { jsRulesConfig, prettierConfig, linterOptionsConfig };

const jsRulesConfig = [
  js.configs.recommended,
  importConfig,
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: unicornDisabledRules,
  },
];

const prettierConfig = eslintConfigPrettier;

const linterOptionsConfig = {
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};

/**
 * @type {ESLintConfig[]}
 */
const config = [
  ...jsRulesConfig,
  // prettier should be the last (Rules) config as it works by turning off other rules.
  prettierConfig,
  linterOptionsConfig,
];

export default config;
