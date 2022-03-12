require('dotenv').config()

const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    // hostname: 'localhost',
    // port: 4723,
    // path: '/wd/hub',
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        // "platformName": "Android",
        // "platformVersion": "12",
        // "deviceName": "Pixel 5 API 31",
        // "automationName": "UiAutomator2",
        // "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        // "appWaitActivity": ".ui.login.LoginActivity"
        project: "First Webdriverio Android Project",
        build: "browserstack-build-1",
        name: "local_test",
        device: "Samsung Galaxy S22 Ultra",
        os_version: "12.0",
        app: process.env.BROWSERSTACK_APP_ID
    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
          }]
    ],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 30000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        driver.takeScreenshot();
    }
}