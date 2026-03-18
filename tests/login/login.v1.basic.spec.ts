import { test, expect } from '../../fixtures/test-fixtures';

test('verify valid login action', async ({ page, loginPage }) => {
  await page.goto('https://crlt-web-uat.mypits.org/login');
  await loginPage.login('sabary@yopmail.com', 'Pass@123');

  await expect(
    page.locator('//h2[normalize-space()="Unlock Private Marketplace Access"]')
  ).toBeVisible();

  await page.locator('span:has(svg.lucide-x)').click();
});

test('verify invalid login action', async ({ page, loginPage }) => {
  await page.goto('https://crlt-web-uat.mypits.org/login');
  await loginPage.login('sabary@yopmail.com', 'Pass@1234');

  await expect(
    page.locator('//p[normalize-space()="Incorrect email or password."]')
  ).toBeVisible();
});