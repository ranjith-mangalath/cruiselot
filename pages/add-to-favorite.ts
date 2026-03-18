import { Page, expect } from "@playwright/test";

export class AddtoFavorite {

    constructor(public page: Page) { }

    get viewDetailsButton() {
        return this.page.getByRole('button', { name: 'View Details', exact: true }).first();
    }

    async clickOnViewDetailsButton() {
        const cruiseCard = this.page.locator('div')
            .filter({ hasText: 'Norwegian Epic' })
            .filter({ has: this.page.getByRole('button', { name: 'View Details' }) })
            .last();
        const viewDetailsBtn = cruiseCard.getByRole('button', { name: 'View Details' }).first();
        await viewDetailsBtn.click();
    }

    get addToFavoriteButton() {
        return this.page.getByRole('button', { name: 'Add to favorites' });
    }
    get removeFromFavoriteButton() {
        return this.page.getByRole('button', { name: 'Remove from favorites' });
    }
    async ensureItemIsFavorited() {
        // Wait for either the add or remove button to be visible first
        await expect(this.addToFavoriteButton.or(this.removeFromFavoriteButton).first()).toBeVisible({ timeout: 30000 });

        if (await this.addToFavoriteButton.isVisible()) {
            await this.addToFavoriteButton.click();
        } else {
            console.log("Item is already favorited");
        }
    }
    get favoritesMenu() {
        return this.page.locator('header').getByRole('button', { name: 'Favorites' });
    }

    async clickFavoritesMenu() {
        await this.favoritesMenu.click();
    }

    get favoritesPopup() {
        return this.page.getByText('All of your favorite cruises in one place');
    }

    async verifyFavoritesPopupVisible() {
        const popup = this.page.locator('div[data-rac]');
        await expect(popup.getByText('Favorites', { exact: true })).toBeVisible();
    }

    get norwegianEpicItem() {
        return this.page.locator('div[data-rac]').locator('div').filter({ hasText: 'Norwegian Epic' }).last();
    }

    async verifyNorwegianEpicPresent() {
        const popup = this.page.locator('div[data-rac]');

        await expect(popup.getByText('Norwegian Epic').first()).toBeVisible();
        await expect(popup.getByText('May 30, 2026').first()).toBeVisible();
        await expect(popup.getByText('1 Nights').first()).toBeVisible();
    }

}

