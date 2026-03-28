import { test as base, Page } from "@playwright/test"
import { LoginPage } from "../pages/login-page"
//import { Client } from 'pg';


export type MyFixtures = {
    loginPage: LoginPage;
    loggedInPage: Page;
    //db: Client;
};

// Only one "base.extend" call
// Ensure you are exporting the "test" object created by extend
export const test = base.extend<MyFixtures>({

    // Database Fixture
    // db: async ({ }, use: (r: Client) => Promise<void>) => {
    //     const client = new Client({
    //         user: 'cruiselot_user',
    //         host: '10.10.100.237',
    //         database: 'cruiselot_db',
    //         password: 'kBp8tqtP77',
    //         port: 32661,
    //     });

    //     await client.connect();
    //     await use(client); // This makes the 'db' object available in your tests
    //     await client.end();   // This closes the connection after the test is done
    // },

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

        // // Wait for the specific heading we located earlier
        // await page.locator('//h2[normalize-space()="Unlock Private Marketplace Access"]').waitFor({ state: 'visible' });

        // // Click the close button
        // await page.locator('span:has(svg.lucide-x)').click();

        await use(page);
    }
});

// Configure the test runner
test.use({
    video: process.env.CI ? 'on' : 'retain-on-failure',
});

export { expect } from "@playwright/test";