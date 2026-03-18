import { test, expect } from '../../fixtures/test-fixtures';

test('verify valid login action with waits', async ({ page, loginPage }) => {
    test.setTimeout(10 * 60 * 1000);
    await page.goto('https://crlt-web-uat.mypits.org/login', { timeout: 60000 });
    await loginPage.login('sabary@yopmail.com', 'Pass@123');

    await expect(
        page.locator('//h2[normalize-space()="Unlock Private Marketplace Access"]')
    ).toBeVisible({ timeout: 60000 });
    
    // Close the page
    await page.close();
});