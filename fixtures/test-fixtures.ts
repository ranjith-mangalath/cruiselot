import { test as base, Page } from "@playwright/test"
import { LoginPage } from "../pages/login-page"


export type MyFixtures = {
    loginPage: LoginPage;
    loggedInPage: Page;
};

// Only one "base.extend" call
// Ensure you are exporting the "test" object created by extend
export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const _loginPage = new LoginPage(page);
        await use(_loginPage);
    },

    // Notice we added 'loginPage' to the dependencies here
    //Ensure the types are recognized by the extend block
    loggedInPage: async ({ page, loginPage }, use) => {
        await page.goto('https://crlt-web-uat.mypits.org/login');

        // Use the loginPage fixture we defined above
        await loginPage.login('manav@yopmail.com', 'Pass@123');

        // Wait for the specific heading we located earlier
        await page.locator('//h2[normalize-space()="Unlock Private Marketplace Access"]').waitFor({ state: 'visible' });

        // Click the close button
        await page.locator('span:has(svg.lucide-x)').click();

        await use(page);
    }
});

// Configure the test runner
test.use({
    video: process.env.CI ? 'on' : 'retain-on-failure',
});

export { expect } from "@playwright/test";