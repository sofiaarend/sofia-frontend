// eslint-disable-next-line @typescript-eslint/no-require-imports
const { relative } = require('path');

const formatFilenames = (filenames) =>
  filenames.map((f) => `"${relative(process.cwd(), f)}"`).join(' ');

const buildEslintCommand = (filenames) =>
  `eslint --fix --max-warnings 0 ${formatFilenames(filenames)}`;

const buildStylelintCommand = (filenames) => `stylelint --fix ${formatFilenames(filenames)}`;

const buildPrettierCommand = (filenames) => `prettier --write ${formatFilenames(filenames)}`;

module.exports = {
  // JS / TS → ESLint + Prettier
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],

  // CSS → Stylelint + Prettier
  '*.css': [buildStylelintCommand, buildPrettierCommand],

  // Markdown / JSON / YAML → Prettier only
  '*.{md,json,yml,yaml}': [buildPrettierCommand],
};
