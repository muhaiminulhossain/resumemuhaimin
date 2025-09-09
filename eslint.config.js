// eslint.config.js — Flat config for ESLint v9
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist/**", "node_modules/**"],

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
      import: importPlugin,
    },

    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },

    rules: {
      // base JS
      ...js.configs.recommended.rules,

      // react
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",

      // imports must exist and match case (prevents ThemeToggle vs Themetoggle bugs)
      "import/no-unresolved": ["error", { caseSensitive: true }],

      // niceties
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

      // we don’t use PropTypes in this project
      "react/prop-types": "off",
    },
  },
];
