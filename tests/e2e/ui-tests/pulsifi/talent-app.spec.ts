import { test } from '@playwright/test';

const appUrl = 'https://staging-app.pulsifi.me';

test.describe('smoke test for talent app', () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(120000);
    await page.goto(appUrl);
  });

  test('should load the app successfully', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Qa12345');
    await page.getByRole('button', { name: 'Log In' }).click();
  });
});
