var testWebpackConfig = require('./webpack.test.js')({ env: 'test' });
// Karma configuration
// Generated on Fri Jul 07 2017 08:06:15 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: './config/test.entry.js', watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './config/test.entry.js': ['coverage', 'webpack', 'sourcemap']
    },

    webpack: testWebpackConfig,
    coverageReporter: {
        type: 'in-memory'
    },
    remapCoverageReporter: {
        'text-summary': null,
        json: './coverage/coverage.json',
        html: './coverage/html'
    },

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i.e.
        noInfo: true,
        // and use stats to turn off verbose output
        stats: {
            // options i.e.
            chunks: false
        }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage', 'remap-coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
