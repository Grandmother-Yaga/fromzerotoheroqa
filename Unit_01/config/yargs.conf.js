#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

let browser;

switch (argv.browser) {
  case 'edge':
    browser = {
      browserName: 'MicrosoftEdge',
      maxInstances: 1,
      acceptInsecureCerts: true,
      'ms:edgeOptions': {
        args: [
          '--start-maximized',
          'disable-infobars',
          'disable-popup-blocking',
          'disable-notifications',
          'no-sandbox',
          'disable-gpu',
        ],
      },
    };
    break;

  default:
    // case 'chrome':
    browser = {
      browserName: 'chrome',
      // browserVersion: '120.0.6099.109',
      maxInstances: 1,
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          'start-maximized',
          'disable-infobars',
          'disable-popup-blocking',
          'disable-notifications',
          'no-sandbox',
          'disable-gpu',
        ],
        prefs: {
          'profile.managed_default_content_settings.popups': 2,
          'profile.managed_default_content_settings.notifications': 2,
          'profile.default_content_settings.cookies': 2,
        },
      },
    };
}

module.exports = { browser };
