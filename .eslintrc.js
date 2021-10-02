module.exports = {
  extends: [
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  plugins: ['prettier'],
  rules: {
    'object-shorthand': ['error', 'always'],
    'prettier/prettier': ['off'],
    'import/named': ['off'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-anonymous-default-export': ['off'],
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'next/*',
          'next-auth/*',
          '**/modules/*',
          '**/components/*',
          '**/public/**/*',
          '**/store/*',
          '**/scenes/*',
          '*/**/*.svg',
          '*/**/*.png',
        ],
      },
    ],
  },
};
