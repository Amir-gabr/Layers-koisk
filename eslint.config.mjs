import globals from "globals";
import pluginJs from "@eslint/js";
import reactPlugin from "eslint-plugin-react"; // Add this for React support

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020, // Ensure modern ECMAScript syntax support
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      react: reactPlugin, // Add React plugin
    },
    rules: {
      "react/jsx-uses-react": "error", // Ensure React usage is correctly checked
      "react/jsx-uses-vars": "error", // Prevent variables used in JSX from being marked as unused
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  pluginJs.configs.recommended,
];
