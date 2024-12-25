class MailsacPage {
    constructor(page) {
        this.page = page;
        this.mailboxInput = 'div.elementor-widget-container [placeholder="mailbox"]';
        this.submitButton = 'button.elementor-button[type="submit"]';
        this.mailboxHeading = 'div.inbox h2';
    }

    async navigate() {
        await this.page.goto('https://mailsac.com/');
        return await this.page.title();
    }

    async enterEmail(emailString) {
        await this.page.locator(this.mailboxInput).fill(emailString);
    }

    async clickCheckMail() {
        const button = this.page.locator(this.submitButton);
        await button.waitFor({ state: 'visible' });
        await Promise.all([
            this.page.waitForNavigation(),
            button.click()
        ]);
    }

    async getMailboxAddress() {
        const heading = this.page.locator(this.mailboxHeading);
        await heading.waitFor({ state: 'visible' });
        return await heading.textContent();
    }
}

module.exports = MailsacPage;