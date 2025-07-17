import { test } from '@playwright/test';

const appUrl = 'https://staging-app.pulsifi.me';

test.describe('smoke test for talent app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
    await page.waitForURL(/enterprise|id/, {waitUntil: 'load'});
  });

  test('should load the app successfully', async ({ page }) => {
    await page.waitForTimeout(1 * 60 * 1000); // Wait for 1 minute to ensure the app is fully loaded
    await page.getByPlaceholder('yours@example.com').fill('test1@gmail.com');
    await page.getByPlaceholder('your password').fill('Qa12345');
    await page.getByLabel('Log In').click();

  });
});
