import { Page, Locator, FrameLocator, expect } from '@playwright/test';

export class UIActions {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ============================================================
    // NAVIGATION ACTIONS
    // ============================================================

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async refreshPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async getURL(): Promise<string> {
        return this.page.url();
    }

    // ============================================================
    // BASIC CLICK ACTIONS
    // ============================================================

    async click(locator: string) {
        await this.page.locator(locator).click();
    }

    async doubleClick(locator: string) {
        await this.page.locator(locator).dblclick();
    }

    async rightClick(locator: string) {
        await this.page.locator(locator).click({ button: 'right' });
    }

    async forceClick(locator: string) {
        await this.page.locator(locator).click({ force: true });
    }

    async clickWithPosition(locator: string) {
        await this.page.locator(locator).click({ position: { x: 10, y: 10 } });
    }

    // ============================================================
    // TEXT INPUT ACTIONS
    // ============================================================

    async fill(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    async clear(locator: string) {
        await this.page.locator(locator).clear();
    }

    /* Key: F1 - F12, Digit0- Digit9, KeyA- KeyZ, Backquote, Minus, Equal, Backslash, Backspace, 
    Tab, Delete, Escape, ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight, 
    ArrowUp, Shift, Control, Alt, Meta, ShiftLeft, ControlOrMeta etc. */
    async pressKey(locator: string, key: string) {
        await this.page.locator(locator).press(key);
    }

    async pressSequentially(locator: string, text: string) {
        await this.page.locator(locator).pressSequentially(text, { delay: 100 });
    }

    // ============================================================
    // DROPDOWN ACTIONS
    // ============================================================

    async selectByValue(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
    }

    async selectByLabel(locator: string, label: string) {
        await this.page.locator(locator).selectOption({ label });
    }

    async selectByIndex(locator: string, index: number) {
        await this.page.locator(locator).selectOption({ index });
    }

    async selectMany(locator: string, values: string[]) {
        await this.page.locator(locator).selectOption(values);
    }

    async getSelectedOption(locator: string) {
        return await this.page.locator(locator).inputValue();
    }

    // ============================================================
    // CHECKBOX / RADIO ACTIONS
    // ============================================================

    async check(locator: string) {
        await this.page.locator(locator).check();
    }

    async uncheck(locator: string) {
        await this.page.locator(locator).uncheck();
    }

    async isChecked(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isChecked();
    }

    // ============================================================
    // MOUSE ACTIONS
    // ============================================================

    async hover(locator: string) {
        await this.page.locator(locator).hover();
    }

    async dragAndDrop(source: string, target: string) {
        await this.page.dragAndDrop(source, target);
    }

    async mouseMove(x: number, y: number) {
        await this.page.mouse.move(x, y);
    }

    async mouseDown() {
        await this.page.mouse.down();
    }

    async mouseUp() {
        await this.page.mouse.up();
    }

    async mouseWheel(x: number, y: number) {
        await this.page.mouse.wheel(x, y);
    }

    // ============================================================
    // KEYBOARD ACTIONS
    // ============================================================

    async pressKeyboardKey(key: string) {
        await this.page.keyboard.press(key);
    }

    async keyboardType(text: string) {
        await this.page.keyboard.type(text);
    }

    async keyDown(key: string) {
        await this.page.keyboard.down(key);
    }

    async keyUp(key: string) {
        await this.page.keyboard.up(key);
    }

    // ============================================================
    // FILE UPLOAD ACTIONS
    // ============================================================

    async uploadFile(locator: string, filePath: string) {
        await this.page.locator(locator).setInputFiles(filePath);
    }

    async uploadMultipleFiles(locator: string, files: string[]) {
        await this.page.locator(locator).setInputFiles(files);
    }

    async clearUploadedFile(locator: string) {
        await this.page.locator(locator).setInputFiles([]);
    }

    // ============================================================
    // WAIT ACTIONS
    // ============================================================

    async waitForSelector(locator: string) {
        await this.page.waitForSelector(locator);
    }
    
    async waitForVisible(locator: string) {
        await this.page.locator(locator).waitFor({ state: 'visible' });
    }

    async waitForHidden(locator: string) {
        await this.page.locator(locator).waitFor({ state: 'hidden' });
    }

    async waitForAttached(locator: string) {
        await this.page.locator(locator).waitFor({ state: 'attached' });
    }

    async waitForDetached(locator: string) {
        await this.page.locator(locator).waitFor({ state: 'detached' });
    }

    // Wait for a specific amount of time (not recommended for regular use)
    async waitForTimeout(ms: number) {
        await this.page.waitForTimeout(ms);
    }

    async waitForLoadState() {
        await this.page.waitForLoadState('networkidle');
    }

    // ============================================================
    // SCROLL ACTIONS
    // ============================================================

    async scrollIntoView(locator: string) {
        await this.page.locator(locator).scrollIntoViewIfNeeded();
    }

    async scrollToTop() {
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }

    async scrollToBottom() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async scrollBy(x: number, y: number) {
        await this.page.evaluate(
            ({ x, y }) => window.scrollBy(x, y),
            { x, y }
        );
    }

    // ============================================================
    // ELEMENT INFORMATION ACTIONS
    // ============================================================

    async getText(locator: string) {
        return await this.page.locator(locator).textContent();
    }

    async getInnerText(locator: string) {
        return await this.page.locator(locator).innerText();
    }

    async getInputValue(locator: string) {
        return await this.page.locator(locator).inputValue();
    }

    async getAttribute(locator: string, attribute: string) {
        return await this.page.locator(locator).getAttribute(attribute);
    }

    async count(locator: string) {
        return await this.page.locator(locator).count();
    }

    // ============================================================
    // ELEMENT STATE ACTIONS
    // ============================================================

    async isVisible(locator: string) {
        return await this.page.locator(locator).isVisible();
    }

    async isEnabled(locator: string) {
        return await this.page.locator(locator).isEnabled();
    }

    async isDisabled(locator: string) {
        return await this.page.locator(locator).isDisabled();
    }

    async isEditable(locator: string) {
        return await this.page.locator(locator).isEditable();
    }

    // ============================================================
    // SCREENSHOT ACTIONS
    // ============================================================

    async pageScreenshot(path: string) {
        await this.page.screenshot({ path });
    }

    async elementScreenshot(locator: string, path: string) {
        await this.page.locator(locator).screenshot({ path });
    }

    async fullPageScreenshot(path: string) {
        await this.page.screenshot({ path, fullPage: true });
    }

    // ============================================================
    // FRAME / IFRAME ACTIONS
    // ============================================================

    async getFrame(frameSelector: string): Promise<FrameLocator> {
        return this.page.frameLocator(frameSelector);
    }

    async clickInsideFrame(frameSelector: string, locator: string) {
        await this.page.frameLocator(frameSelector).locator(locator).click();
    }

    async fillInsideFrame(frameSelector: string, locator: string, text: string) {
        await this.page.frameLocator(frameSelector).locator(locator).fill(text);
    }

    // ============================================================
    // MULTIPLE TABS / WINDOWS
    // ============================================================

    async openNewTab() {
        const page = await this.page.context().newPage();
        return page;
    }

    async waitForNewTabAndSwitch() {
        const newPage = await this.page.context().waitForEvent('page');
        await newPage.waitForLoadState();
        return newPage;
    }

    // ============================================================
    // ALERT / DIALOG HANDLING
    // ============================================================

    async acceptAlert() {
        this.page.once('dialog', dialog => dialog.accept());
    }

    async dismissAlert() {
        this.page.once('dialog', dialog => dialog.dismiss());
    }

    async acceptPrompt(text: string) {
        this.page.once('dialog', dialog => dialog.accept(text));
    }

    // ============================================================
    // JAVASCRIPT EXECUTION
    // ============================================================

    async executeJS(script: string) {
        return await this.page.evaluate(script);
    }

    async executeJSWithArgs(fn: any, arg: any) {
        return await this.page.evaluate(fn, arg);
    }

    // ============================================================
    // ASSERTIONS (FOR TRAINING)
    // ============================================================

    async expectVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    async expectHidden(locator: string) {
        await expect(this.page.locator(locator)).toBeHidden();
    }

    async expectText(locator: string, text: string) {
        await expect(this.page.locator(locator)).toHaveText(text);
    }

    async dontExpectText(locator: string, text: string) {
        await expect(this.page.locator(locator)).not.toHaveText(text);
    }
    
    async expectPartialText(locator: string, text: string) {
        await expect(this.page.locator(locator)).toContainText(text);
    }

    async dontExpectPartialText(locator: string, text: string) {
        await expect(this.page.locator(locator)).not.toContainText(text);
    }

    async expectChecked(locator: string) {
        await expect(this.page.locator(locator)).toBeChecked();
    }

    async expectNotChecked(locator: string) {
        await expect(this.page.locator(locator)).not.toBeChecked();
    }

    async expectURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }
}
