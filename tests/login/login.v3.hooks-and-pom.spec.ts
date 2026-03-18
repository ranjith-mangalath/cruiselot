import { test, expect } from '../../fixtures/test-fixtures';
import { FeedPage } from '../../pages/feed-page';

test.use({
    video: process.env.CI ? 'on' : 'retain-on-failure'
});

test.describe('login Tests', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://crlt-web-uat.mypits.org/login');
    });

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Login/);
    });

    // We use the `loginPage` custom fixture here instead of instantiating it manually!
    test('verify valid login action', async ({ page, loginPage }) => {    
        const feedPage = new FeedPage(page);
        
        await expect(loginPage.usernameField).toBeVisible();
        await expect(loginPage.passwordField).toBeVisible();
        
        await loginPage.login('manav@yopmail.com', 'Pass@123');
        
        await expect(feedPage.feedHeading).toBeVisible({ timeout: 60000 });
        await expect(feedPage.feedHeading).toHaveText('Unlock Private Marketplace Access');
    });

    // Example of a test that needs a pre-authenticated session
    test('verify logged-in session works globally', async ({ loggedInPage }) => {
        // loggedInPage automatically logs in and gets past the modal behind the scenes!
        // You just start testing the actual application right away.
        const feedPage = new FeedPage(loggedInPage);
        await expect(loggedInPage).toHaveURL(/.*customer\/(search|dashboard)/);
    });
});

