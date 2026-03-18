import { test, expect } from '../fixtures/test-fixtures';
import { SearchResultsPage } from '../pages/Search-results-page';
import { AddtoFavorite } from '../pages/add-to-favorite';

test.describe('Add to Favorites', () => {

    test('Verify user can add a cruise to favorites', async ({ loggedInPage }) => {
        //You are already logged in here
        const searchResultsPage = new SearchResultsPage(loggedInPage);
        const addToFavoritePage = new AddtoFavorite(loggedInPage);
        await searchResultsPage.clearDestinationFilter();
        await searchResultsPage.openCalendar();
        await addToFavoritePage.clickOnViewDetailsButton();
        await addToFavoritePage.ensureItemIsFavorited();
        await addToFavoritePage.clickFavoritesMenu();
        await addToFavoritePage.verifyFavoritesPopupVisible();
        await addToFavoritePage.verifyNorwegianEpicPresent();
    });









});