module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    // complexity should be less than 10
    // https://www.infoq.com/jp/news/2008/04/cyclomaticcomplexity/
    complexity: ["warn", 10],
    // I love "" the much
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-target-blank": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    // Disable require that interface names should prefixed with I
    "@typescript-eslint/interface-name-prefix": "off",
    // Disable require explicit return types on functions and class methods
    "@typescript-eslint/explicit-function-return-type": "off",
    // Disable we offten use empty interface as a placeholder
    "@typescript-eslint/no-empty-interface": "off",
    // Disable we offten use @ts-expect-error comment
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-expect-error": "allow-with-description" },
    ],
    // Disable we don't use propTypes
    "react/prop-types": "off",
    // Disable prevent usage of the return value of ReactDOM.render
    "react/no-render-return-value": "off",
    // React hook preset rules
    "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
