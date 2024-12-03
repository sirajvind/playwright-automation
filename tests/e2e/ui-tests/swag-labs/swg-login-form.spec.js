import { test } from '@playwright/test';
import { SwagLabsDevPage } from '../../../pages/swag-labs-dev-page';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

test.beforeEach('goto baseURL', async ({ page }) => {
    const swagLabsBaseURL = new SwagLabsDevPage(page);
    await swagLabsBaseURL.goto();
});

test('validate login form', async ({ page }) => {
    const swagLabsModule = new SwagLabsDevPage(page);
    await swagLabsModule.fillUsername(process.env.SWAG_LABS_USERNAME);
    await swagLabsModule.fillPassword(process.env.SWAG_LABS_PASSWORD);
    await swagLabsModule.clickLoginButton();
}); 