/**
 * @typedef {import("eslint").Linter.Config} ESLintConfig
 */

import js from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * @type {ESLintConfig[]}
 */
const config = [
  js.configs.recommended,
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: {
      // TODO: change this depending on project's module choice?
      "unicorn/prefer-module": "off",
      // TODO: are there other rules that should be turned off when using commonJS?
      // TODO: do we need a factory to support this?

      // Formatting rules, should be handled by prettier
      "unicorn/empty-brace-spaces": "off",
      "unicorn/switch-case-braces": "off",

      // Consistent import style instead of edge cases for (very few) specific packages is better.
      "unicorn/import-style": "off",
      // Arguably too minor benefit/noise ratio to be worth enforcing this
      "unicorn/prefer-array-some": "off",
      // false positives (e.g.: when using adm-zip `readAsText` method)
      "unicorn/prefer-blob-reading-methods": "off",
      // being explicit is arguably better.
      "unicorn/no-useless-undefined": "off",

      // It seems the reason for the rule is related to things which can be
      // handled (better) with Type checking.
      // Additionally, this is a common functional programming style...
      "unicorn/no-array-callback-reference": "off",
      // too opinionated
      "unicorn/no-array-reduce": "off",
      // passing the length is redundant, but it can improve readability.
      "unicorn/no-length-as-slice-end": "off",
      // Reduces code readability for minor conciseness benefits
      "unicorn/prefer-logical-operator-over-ternary": "off",
      // can be confusing for micro performance optimizations.
      "unicorn/prefer-negative-index": "off",
      // Seems like an opinionated style rule
      "unicorn/prefer-switch": "off",
      // imho this does not necessarily improve code readability (too long names).
      "unicorn/prevent-abbreviations": "off",
    },
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
