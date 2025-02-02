import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Tests are inside the "tests" folder
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'http://localhost:5173/', // Your only environment
    headless: false, // Run in non-headless mode for debugging
    browserName: 'chromium', // Use Chromium by default
    trace: 'on', // Enable tracing for debugging
    video: 'retain-on-failure', // Capture video only if a test fails
    screenshot: 'on', // Take screenshots for all tests
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
