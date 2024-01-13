class BaseInteraction {
  constructor() {}

  async openBrowserWithURL(url) {
    await browser.url(url);
  }

  async inputText(selector, value) {
    await this._waitForDisplayed(selector);
    await $(selector).setValue(value);
  }

  async clickOnElemnt(selector) {
    await this._waitForDisplayed(selector);
    await this._verifyElementCondition(selector, 'isClickable');
    await $(selector).click();
  }

  async _waitForDisplayed(selector) {
    await $(selector).waitForDisplayed({
      timeout: 6000,
      timeoutMsg: `After 6 sec the element: [${selector}] was not displayed.`,
    });
  }

  async _verifyElementCondition(selector, method) {
    switch (method) {
      case 'isClickable':
        await $(selector).isClickable();
        break;

      default:
        throw new Error(
          `verifyElementCondition Error: Method -> [${method}] was not found`
        );
    }
  }

  async getElemet(selector) {
    await this._waitForDisplayed(selector);
    const element = await $(selector);
    return element;
  }

  async pressKey(key) {
    switch (key) {
      case 'Enter':
        await browser.keys('Enter');
        break;

      default:
        throw new Error(`pressKey Error: Key -> [${key}] was not found`);
    }
  }

  async switchFrame(howManyFrames) {
    for (let i = 0; i < howManyFrames; i++) {
      await browser.switchToFrame(0);
    }
  }

  async clearField(selector) {
    await $(selector).clearValue();
  }

  async openNewWindowWithURL(url) {
    await browser.newWindow(url);
  }

  async getText(selector) {
    const text = await $(selector).getText();
    return text;
  }

  async switchWindow(handle) {
    await browser.switchWindow(handle);
  }

  async getWindowHandle() {
    const handle = await browser.getWindowHandle();
    return handle;
  }
}

module.exports = BaseInteraction;
