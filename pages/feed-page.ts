import { Page } from "@playwright/test";
import { HeaderComponents } from "../components/header-components";

export class FeedPage extends HeaderComponents {
    constructor(public page: Page) {
        super(page);
    }

    get feedHeading() {
        return this.page.getByRole('heading', { name: 'Unlock Private Marketplace Access' });
    }

    /* Dynamic locator for logged in user's profile link */
    // getLoggedInUserProfileLink(username: string) {
    //     return this.page.getByRole('link', { name: username });
    // }
}