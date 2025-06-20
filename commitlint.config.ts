import { RuleConfigCondition, RuleConfigSeverity } from '@commitlint/types';

export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            RuleConfigSeverity.Error,
            'always',
            // Add wip to the default types as allowed type
            ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'wip'],
        ] as [RuleConfigSeverity, RuleConfigCondition, string[]],
    },
};
