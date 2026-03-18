import { Page } from "@playwright/test";
import { HeaderComponents } from "../components/header-components";

export class LoginPage extends HeaderComponents {
    constructor(public page: Page) {
        super(page);
    }

    get usernameField() {
        return this.page.getByPlaceholder('Enter your email');
    }
    async enterUsername(username: string) {
        await this.usernameField.fill('manav@yopmail.com');
    }

    get passwordField() {
        return this.page.getByPlaceholder('Enter your password')
    }
    async enterPassword(password: string) {
        await this.passwordField.fill('Pass@123');
    }

    get loginButton() {
        return this.page.locator('button[type="submit"]');
    }

    async clickOnLogin() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLogin();
        // await this.page.waitForLoadState('networkidle', { timeout: 120 * 1000 });
    }
}