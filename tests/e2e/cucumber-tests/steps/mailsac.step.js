const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const MailsacPage = require('../pages/MailsacPage');
const EmailGenerator = require('../utils/emailGenerator');

setDefaultTimeout(30000);

let browser, page, mailsacPage;
const emailString = EmailGenerator.generateEmailString();

Before(async function() {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    mailsacPage = new MailsacPage(page);
});

Given('User navigate to the Mailsac Homepage', async () => {
    try {
        const title = await mailsacPage.navigate();
        expect(title).toBe('Mailsac : Disposable Email Testing Platform');
    } catch (error) {
        console.error('Navigation failed:', error);
        throw error;
    }
});

When('User enter the Formatted String into the Mailbox Textbox', async () => {
    await mailsacPage.enterEmail(emailString);
});

Then('User click the "Check the mail!" Button', async () => {
    await mailsacPage.clickCheckMail();
});

Then('It should Display the correct Mailbox Address', async () => {
    const actualText = await mailsacPage.getMailboxAddress();
    const expectedText = `${emailString}@mailsac.com`;
    expect(actualText).toContain(expectedText);
});

After(async function () {
    try {
        if (browser) {
            await browser.close();
        }
        if (page) {
            await page.close();
        }
    } catch (error) {
        console.error('Failed to close browser/page:', error);
    }
});