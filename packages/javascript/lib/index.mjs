/**
 * @typedef {import("eslint").Linter.Config} ESLintConfig
 */
import js from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";
import { unicornDisabledRules } from "./unicorn-disabled-rules.mjs";

/**
 * @type {ESLintConfig[]}
 */
const config = [
  js.configs.recommended,
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: unicornDisabledRules,
  },
  // prettier should be the last (Rules) config as it works by turning off other rules.
  eslintConfigPrettier,
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];

export default config;
