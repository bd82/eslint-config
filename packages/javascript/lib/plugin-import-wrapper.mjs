/**
 * eslint flat config wrapper for eslint-import-plugin
 * Should be removed once eslint-import-plugin supports eslint flat config natively
 *
 * Based on: https://github.com/import-js/eslint-plugin-import/issues/2964#issuecomment-2119524178
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
    "import/order": "error",
  },
};
