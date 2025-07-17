import { test } from '@playwright/test';

const appUrl = 'https://staging-app.pulsifi.me';

test.describe('smoke test for talent app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
    await page.waitForURL(/enterprise|id/, {waitUntil: 'load'});
    await page.waitForTimeout(2 * 60 * 1000);
  });

  test('should load the app successfully', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email' }).fill('test2@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Qa12345');
    await page.getByRole('button', { name: 'Log In' }).click();

  });
});
