import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, 'env-config/demo.env'), override: true, quiet: true });
dotenv.config({ path: path.resolve(__dirname, 'env-config/demo.secrets.env'), override: true, quiet: true });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Test timeout in milliseconds. */
  timeout: 5 * 60 * 1000,
  /* Suite timeout in milliseconds. */
  globalTimeout: process.env.CI ? 5 * 60 * 60 * 1000 : 0,
  /* Expect options */
  expect: {
    timeout: 5000,
  },
  /* Run tests from files in the "tests" directory. See https://playwright.dev/docs/api/class-testoptions */
  testDir: './tests',
  /* Test match pattern */
  testMatch: '**/*.spec.ts',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Number of concurrent workers */
  workers: process.env.CI ? 4 : 1,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Headless mode */
    headless: process.env.CI ? true : false,
    /* Action timeout in milliseconds, default is 0 (no limit). */
    actionTimeout: 60 * 1000,
    /* Navigate timeout in milliseconds, default is 0 (no limit). */
    navigationTimeout: 2 * 60 * 1000,
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://conduit.bondaracademy.com/login',
    /* Collect screenshots, videos and traces when test fails. See https://playwright.dev/docs/trace-viewer */
    video: process.env.CI ? 'on' : 'retain-on-failure',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  /* One time setup and teardown options. See https://playwright.dev/docs/test-configuration#global-setup-and-global-teardown */
  globalSetup: './global-setup.ts',

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1520, height: 730 },
        launchOptions: { slowMo: 750 }
      },
    },

    {
      name: 'msedge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        viewport: { width: 1520, height: 730 },
        launchOptions: { slowMo: 750 }
      },
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 1520, height: 730 },
        launchOptions: { slowMo: 750 }
      },
    },

    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        viewport: null,
        launchOptions: { slowMo: 750 }
      },
    }
  ]
});