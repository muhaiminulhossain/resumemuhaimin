// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist/**", "node_modules/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      // 👇 tell ESLint/espree to understand JSX
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: reactPlugin,
      import: importPlugin,
    },

    settings: {
      // Let the react plugin auto-detect your React version
      react: { version: "detect" },
      // Case-sensitive import resolution + known extensions
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },

    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // React rules
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // not needed since React 17+

      // Import plugin: ensure files exist & match case
      "import/no-unresolved": ["error", { caseSensitive: true }],

      // Optional niceties
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-console": "off",
    },
  },
];
