import { test, expect } from '@playwright/test';

test.describe('smoke test for talent app', () => {
  test('should load the app successfully', async ({ page }) => {
    await page.goto('https://staging-app.pulsifi.me');
    await expect(page).toHaveTitle(/Log In To Pulsifi/);
    await page.waitForURL(/enterprise|id/, {waitUntil: 'load'});
    await expect(page.getByText('Sign in to Pulsifi')).toBeVisible();
  });
});
