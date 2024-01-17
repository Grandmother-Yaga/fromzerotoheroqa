const BaseInteraction = require('./BaseInteraction');

class YopMailIteraction extends BaseInteraction {
  constructor() {
    super();
    this.cookiesAcceptBtn = '//button[@aria-label="Соглашаюсь"]'; //'#accept';
    this.generateEmailBtn = '//*[@id="listeliens"]/*[@href="email-generator"]';
    this.copyEmailBtn = '#cprnd';
    this.email = '#egen';
    this.checkEmailBtn = '//*[@onclick="egengo();"]';
    this.refreshBtn = '#refresh';
    this.estimatedMonthlyCost = '//table/tbody/tr[2]/td[2]/h3';
    this.iframeYopMail = '#ifmail';
  }

  async openNewWindowWithURL(url) {
    await super.openNewWindowWithURL(url);
  }

  async clickOnElemnt(selector) {
    await super.clickOnElemnt(selector);
  }

  async acceptCookies() {
    await this.clickOnElemnt(this.cookiesAcceptBtn);
  }

  async getText(selector) {
    const text = await super.getText(selector);
    return text;
  }

  async switchToWindow(handle) {
    await super.switchToWindow(handle);
  }

  async getElemet(selector) {
    const element = await super.getElemet(selector);
    return element;
  }

  async getWindowHandle() {
    const handle = await super.getWindowHandle();
    return handle;
  }

  async switchFrame(howManyFrames) {
    await super.switchFrame(howManyFrames);
  }
}

module.exports = new YopMailIteraction();
