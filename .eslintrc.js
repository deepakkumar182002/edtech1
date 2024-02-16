// module.exports = {

//   extends: ["eslint:recommended", "plugin:react/recommended"],
//   plugins: ["react-hooks"],

//   rules: {
//     semi: ["error", "always"],
//     quotes: ["error", "double"],
//     "react-hooks/rules-of-hooks": "error",
//     "react-hooks/exhaustive-deps": "warn",
//   },

// };

module.exports = {
  //   parser: "@babel/eslint-parser", // Use Babel parser for better ESNext support
  parserOptions: {
    ecmaVersion: 2019, // or a higher version that supports your ECMAScript features
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react-hooks"],
  rules: {
    // Customize your rules here
    // Example: 'no-console': 'off',
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
