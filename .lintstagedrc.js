// eslint-disable-next-line @typescript-eslint/no-require-imports
const { relative } = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix --max-warnings 0 ${filenames
    .map((f) => `"${relative(process.cwd(), f)}"`)
    .join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
