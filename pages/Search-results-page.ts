import { Page, expect } from "@playwright/test";

export class SearchResultsPage {

    constructor(public page: Page) { }

    // get destinationFilterClear() {
    //     return this.page.locator('div[role="button"]:has(svg.size-4)');
    // }
    get destinationFilterClear() {
        return this.page.locator('div:has-text("Caribbean")').locator('div[role="button"]:has(svg.size-3)').locator('visible=true');
    }
    async clearDestinationFilter() {
        await this.destinationFilterClear.click();
        // await this.page.getByRole('checkbox', { name: 'Caribbean' }).check();
    }
    async openCalendar() {
        const calendarRegex = /[A-Z][a-z]+ \d{4}/;
        const calendarField = this.page.getByRole('button', { name: calendarRegex });

        // Verify it's visible and then click to open the picker
        await expect(calendarField).toBeVisible();
        await calendarField.click();

        const monthPicker = this.page.getByLabel('Month picker');

        // Check if the container is visible
        await expect(monthPicker).toBeVisible();
        await monthPicker.getByRole('button', { name: 'May', exact: true }).click();
        const exploreButton = this.page.getByRole('button', { name: 'Explore Deals' });
        await exploreButton.click();
        await expect(this.page.getByText('Norwegian Epic', { exact: true }).first()).toBeVisible();
    }
}