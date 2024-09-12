/**
 * eslint flat config wrapper to configure only a single rule from eslint-plugin-import
 * If we import the recommended config from eslint-plugin-import, it will include too many rules
 * Which we are not interested in...
 */
import eslintPluginImport from "eslint-plugin-import";

export { importConfig };

const importConfig = {
  plugins: {
    import: { rules: eslintPluginImport.rules },
  },
  rules: {
    // Only interested in the ordering rule
    // It seems (most?) other "recommended" rules in plugin-import overlap with TypeScript checks
    // And @bidi82/eslint-config-javascript is intended to be used with TSC (type checking JS code...).
    "import/order": [
      "error",
      {
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#groups-array
        groups: [
          "type", // Style change from default: type imports should always be first in their own group.
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
};
