const BaseInteraction = require('./BaseInteraction');

class PasteBinInteraction extends BaseInteraction {
  constructor() {
    super();
    this.newPasteField = '#postform-text';
    this.pasteExpirationDropDown = '#select2-postform-expiration-container';
    this.tenMin = '//li[contains(text(), "10 Minutes")]';
    this.pasteNameTitle = '#postform-name';
    this.btnAgree = '[mode="primary"]';
    this.syntaxHighlightingDropDonw = '#select2-postform-format-container';
    this.bushSyntax = '(//li[contains(text(), "Bash")])[1]';
    this.btnCreateNewPaste = '//button[contains(text(), "Create New Paste")]';
    this.pasteExpirationField = '//*[@class="expire"]';
    this.bashField = '.left > *';
    this.pasteFiled = '//ol[@class="bash"]';
  }

  async openBrowserWithURL(url) {
    await super.openBrowserWithURL(url);
  }

  async inputText(selector, text) {
    await super.inputText(selector, text);
  }

  async clickOnElemnt(selector) {
    await super.clickOnElemnt(selector);
  }

  async chooseValueFromDropDown(dropDownSelector, valueSelector) {
    await this.clickOnElemnt(dropDownSelector);
    await this.clickOnElemnt(valueSelector);
  }

  async acceptPopUp() {
    await this.clickOnElemnt(this.btnAgree);
  }

  async getElemet(selector) {
    const element = super.getElemet(selector);
    return element;
  }
}

module.exports = new PasteBinInteraction();
