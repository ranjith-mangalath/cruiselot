import { Page } from "@playwright/test";

export class HeaderComponents {
    constructor(public page: Page) { }

    get homelogo() {
        return this.page.getByRole('link', { name: 'My Cruise Marketplace' });
    }
    async clickOnHomeLink() {
        await this.homelogo.click();
    } get loginButton() {
        return this.page.getByRole('link', { name: 'Login' });
    }
    async clickLogin() {
        await this.loginButton.click();
    }
    get home() {
        return this.page.getByRole('link', { name: 'Home' });
    }
    async clickHome() {
        await this.home.click();
    }

}