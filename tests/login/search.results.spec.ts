import { test, expect } from '../../fixtures/test-fixtures';
import { SearchResultsPage } from '../../pages/Search-results-page';

test.describe('Search Results Flow', () => {

  test('Verify search results after changing departing month', async ({ loggedInPage }) => {
    const searchResultsPage = new SearchResultsPage(loggedInPage);

    // Step 3: Clear preselected Caribbean destination
    await searchResultsPage.clearDestinationFilter();

    // Step 4: Change month to May and explore deals
    await searchResultsPage.openCalendar();

    // Validation happens inside openCalendar()
    // It verifies "Norwegian Epic" is visible
  });

});