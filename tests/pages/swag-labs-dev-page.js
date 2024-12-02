import { expect } from "@playwright/test";

export class SwagLabsDevPage {
    
    constructor(page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page.locator('#root')).toContainText('Swag Labs');
    }

    async clickLoginButton() {
        await this.loginButton.click();
        await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
        await expect(this.page.locator('[data-test="inventory-container"]')).toBeVisible();
    }

    async fillUsername(username){
        await this.username.fill(username);
    }

    async fillPassword(password){
        await this.password.fill(password);
    }
}