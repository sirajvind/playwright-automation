import { test } from '@playwright/test';

const appUrl = 'https://staging-app.pulsifi.me';

test.describe('smoke test for talent app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
  });

  test('should load the app successfully', async ({ page }) => {
    // await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
    // await page.getByRole('textbox', { name: 'Password' }).fill('Qa12345');
    // await page.getByRole('button', { name: 'Log In' }).click();
    
    await page.getByPlaceholder('yours@example.com').fill('test1@gmail.com');
    await page.getByPlaceholder('your password').fill('Qa12345');
    await page.getByLabel('Log In').click();

  });
});
