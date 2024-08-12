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
      // imho this does not necessarily improve code readability (too long names).
      "unicorn/prevent-abbreviations": "off",
      // Consistent import style instead of edge cases for (very few) specific packages if better.
      "unicorn/import-style": "off",
      // Arguably too minor benefit/noise ratio to be worth enforcing this
      "unicorn/prefer-array-some": "off",
      // false positives (e.g.: when using adm-zip `readAsText` method)
      "unicorn/prefer-blob-reading-methods": "off",
      // being explicit is arguably better.
      "unicorn/no-useless-undefined": "off",
    },
  },
  eslintConfigPrettier,
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];

export default config;
