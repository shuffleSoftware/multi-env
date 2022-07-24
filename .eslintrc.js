module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'new-cap': 0, // https://stackoverflow.com/questions/44477860/eslint-new-cap-error
  },
};
