import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // tests will be inside the tests folder
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    headless: true, // Running in headless mode for CI/CD or testing
    browserName: 'chromium', // Use Chromium for the tests
  },
});
