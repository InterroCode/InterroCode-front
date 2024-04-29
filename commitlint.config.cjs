module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never', '🚨 커밋 타입을 반드시 포함해야 합니다'],
    'subject-empty': [2, 'never', '🚨 커밋 제목을 반드시 포함해야 합니다'],
    'header-max-length': [2, 'always', 72],
    'type-enum': [2, 'always', ['build', 'ci', 'perf', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']],
  },
}
