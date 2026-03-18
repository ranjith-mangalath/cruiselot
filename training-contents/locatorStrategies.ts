import { Page, Locator } from '@playwright/test';

export class LocatorStrategies {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ============================================================
    // PLAYWRIGHT USER-FACING LOCATORS (RECOMMENDED)
    // ============================================================
    // These locators mimic how real users interact with the UI.
    // Playwright recommends these because they make tests stable
    // and resilient to DOM changes.

    // ------------------------------------------------------------
    // getByRole()
    // ------------------------------------------------------------
    // Finds elements using their ARIA role.
    //
    // Works when:
    // 1. Element has implicit role (button, link, textbox etc)
    // 2. Element has explicit role attribute
    //
    // Example HTML:
    // <button>Login</button>
    // <div role="button">Submit</div>
    // <input type="checkbox" /> Subscribe</input>

    getButtonByRole(): Locator {
        return this.page.getByRole('button', { name: 'Login' });
    }

    // When to use:
    // Best locator for buttons, links, menus, checkboxes etc.



    // ------------------------------------------------------------
    // getByLabel()
    // ------------------------------------------------------------
    // Used for locating form fields using their labels.
    //
    // Works when:
    // 1. aria-label attribute present
    //    <input aria-label="Username">
    //
    // 2. Label associated using "for"
    //    <label for="username">Username</label>
    //    <input id="username">
    //
    // 3. Input inside label
    //    <label>Username <input></label>

    getInputByLabel(): Locator {
        return this.page.getByLabel('Username');
    }

    // When to use:
    // Best locator for input fields



    // ------------------------------------------------------------
    // getByPlaceholder()
    // ------------------------------------------------------------
    // Works when placeholder attribute exists.
    //
    // Example HTML:
    // <input placeholder="Enter email">

    getInputByPlaceholder(): Locator {
        return this.page.getByPlaceholder('Enter email');
    }

    // When to use:
    // When form fields rely on placeholders instead of labels.



    // ------------------------------------------------------------
    // getByText()
    // ------------------------------------------------------------
    // Finds element using visible text.
    //
    // Example HTML:
    // <button>Submit Button</button>

    // Supports partial match
    getElementByText(): Locator {
        return this.page.getByText('Submit');
    }

    getPartialText(): Locator {
        return this.page.getByText('Submit Button', { exact: true });
    }

    // When to use:
    // When element contains visible text.



    // ------------------------------------------------------------
    // getByAltText()
    // ------------------------------------------------------------
    // Used for images with alt text.
    //
    // Example HTML:
    // <img alt="Company Logo">

    getImageByAltText(): Locator {
        return this.page.getByAltText('Company Logo');
    }

    // When to use:
    // For image elements.



    // ------------------------------------------------------------
    // getByTitle()
    // ------------------------------------------------------------
    // Works with title attribute
    //
    // Example HTML:
    // <button title="Close Window">

    getElementByTitle(): Locator {
        return this.page.getByTitle('Close Window');
    }

    // When to use:
    // If element contains title attribute.



    // ------------------------------------------------------------
    // getByTestId()
    // ------------------------------------------------------------
    // Best locator for automation.
    //
    // Works when:
    // data-testid attribute exists
    //
    // Example HTML:
    // <button data-testid="login-btn">

    getElementByTestId(): Locator {
        return this.page.getByTestId('login-btn');
    }

    // When to use:
    // Best for automation when dev team supports test ids.



    // ============================================================
    // CSS LOCATOR STRATEGIES
    // ============================================================

    // ------------------------------------------------------------
    // By ID
    // ------------------------------------------------------------
    // HTML
    // <input id="username">

    getById(): Locator {
        return this.page.locator('#username');
    }



    // ------------------------------------------------------------
    // By Class
    // ------------------------------------------------------------
    // HTML
    // <button class="login-btn btn">

    getByClass(): Locator {
        return this.page.locator('.login-btn.btn');
    }



    // ------------------------------------------------------------
    // By Attribute
    // ------------------------------------------------------------
    // HTML
    // <input name="email">

    getByAttribute(): Locator {
        return this.page.locator('[name="email"]');
    }



    // ------------------------------------------------------------
    // Attribute Contains
    // ------------------------------------------------------------
    // HTML
    // <input name="user-email">

    getAttributeContains(): Locator {
        return this.page.locator('[name*="email"]');
    }



    // ------------------------------------------------------------
    // Attribute Starts With
    // ------------------------------------------------------------
    // HTML
    // <input name="user-email">

    getAttributeStartsWith(): Locator {
        return this.page.locator('[name^="user"]');
    }



    // ------------------------------------------------------------
    // Attribute Ends With
    // ------------------------------------------------------------

    getAttributeEndsWith(): Locator {
        return this.page.locator('[name$="email"]');
    }



    // ------------------------------------------------------------
    // Decendent
    // ------------------------------------------------------------

    getChildElement(): Locator {
        return this.page.locator('div.form input');
    }



    // ------------------------------------------------------------
    // Direct Child
    // ------------------------------------------------------------

    getDirectChild(): Locator {
        return this.page.locator('div > button');
    }


    // ============================================================
    // PLAYWRIGHT SPECIAL LOCATORS
    // ============================================================

    // ------------------------------------------------------------
    // hasText
    // ------------------------------------------------------------

    getUsingHasText(): Locator {
        return this.page.locator('div', { hasText: 'Welcome' });
    }



    // ------------------------------------------------------------
    // has()
    // ------------------------------------------------------------

    getUsingHas(): Locator {
        return this.page.locator('div', {
            has: this.page.locator('button')
        });
    }



    // ============================================================
    // XPATH LOCATORS
    // ============================================================

    // Basic XPath

    getUsingXpath(): Locator {
        return this.page.locator('//input[@id="username"]');
    }



    // XPath Contains

    getXpathContains(): Locator {
        return this.page.locator('//input[contains(@id,"user")]');
    }



    // XPath Text

    getXpathText(): Locator {
        return this.page.locator('//button[text()="Submit"]');
    }



    // XPath Normalize Space

    getXpathNormalizeSpace(): Locator {
        return this.page.locator('//button[normalize-space()="Submit"]');
    }



    // XPath Starts With

    getXpathStartsWith(): Locator {
        return this.page.locator('//input[starts-with(@id,"user")]');
    }



    // XPath Parent Child

    getXpathParentChild(): Locator {
        return this.page.locator('//div[@class="form"]//input');
    }



    // XPath Index

    getXpathIndex(): Locator {
        return this.page.locator('(//button)[1]');
    }



    // ============================================================
    // CHAINING LOCATORS
    // ============================================================

    getChainedLocator(): Locator {
        return this.page
            .locator('.form')
            .locator('input');
    }



    // ============================================================
    // FILTER LOCATORS
    // ============================================================

    getFilteredLocator(): Locator {
        return this.page
            .locator('button')
            .filter({ hasText: 'Submit' });
    }

}
