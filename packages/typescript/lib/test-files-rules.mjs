export const testFilesRules = {
  files: ["**/*.spec.js", "**/*.spec.mjs", "**/*.spec.ts"],
  rules: {
    // this often conflicts with `chai` assertion style
    // see: https://stackoverflow.com/questions/37558795/nice-way-to-get-rid-of-no-unused-expressions-linter-error-with-chai
    "@typescript-eslint/no-unused-expressions": "off",
  },
};
