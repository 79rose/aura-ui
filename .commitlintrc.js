module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'perf',
        'style',
        'refactor',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 50],
  },
  plugins: [{
    rules: {
      'type-emoji': ({ type }) => {
        const types = [
          'feat',
          'fix',
          'docs',
          'perf',
          'style',
          'refactor',
          'test',
          'build',
          'ci',
          'chore',
          'revert',
        ];
        const emoji = [
          '🐳',
          '✨',
          '🐞',
          '📃',
          '🌈',
          '🔧',
          '↩',
          '🐎',
          '🦄',
          '🧪',
        ];
        if (types.includes(type) || emoji.includes(type)) {
          return [true];
        }
        return [false, `type not allowed, should be one of [${types.join(', ')}] or [${emoji.join(', ')}]`];
      },
    },
  }],
};
