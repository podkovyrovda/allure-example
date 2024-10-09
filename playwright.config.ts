import {defineConfig, devices} from "@playwright/test";

export default defineConfig({
  testDir: "./playwright-test",
  use: {
    screenshot: 'only-on-failure'
  },
  reporter: [
    ["list"],
    [
      "allure-playwright",
      {
        resultsDir: "./out/allure-results",
        environmentInfo: {
          node_version: process.version,
        },
      },
    ],
  ],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});