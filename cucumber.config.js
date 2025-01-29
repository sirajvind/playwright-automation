const common = {
    formatOptions: {
        snippetInterface: 'async-await'
    },
    format: [
        'progress-bar',
        'html:cucumber-report/report.html',
        'json:cucumber-report/report.json'
    ],
    paths: ['tests/e2e/cucumber-tests/features/**/*.feature'],
    require: [
        'tests/e2e/cucumber-tests/steps/**/*.js',
        'tests/e2e/cucumber-tests/pages/**/*.js',
        'tests/e2e/cucumber-tests/utils/**/*.js'
    ]
};

module.exports = {
    default: {
        ...common,
        parallel: 2,
        format: [...common.format, 'summary']
    },
    ci: {
        ...common,
        parallel: 4,
        format: [...common.format, 'junit:cucumber-report/junit.xml'],
        retry: 1
    }
}; 