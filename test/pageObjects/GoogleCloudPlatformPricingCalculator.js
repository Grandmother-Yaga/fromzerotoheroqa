const BaseInteraction = require('./BaseInteraction');

class GoogleCloudPlatformPricingCalculator extends BaseInteraction {
  constructor() {
    super();
    this.searchEngine = '//*[@class="mb2a7b"]';
    this.searchedItem =
      '(//b[contains(text(), "Google Cloud Pricing Calculator")])[3]';
    this.computeEngineMode = '//div[@title="Compute Engine"]';
    this.instances = '#input_100';
    this.intancesForField = '#input_101';
    this.softwareDropDown = '#select_value_label_92';
    this.requiredSoftware = '#select_option_102';
    this.provisionongModelDropDown = '#select_value_label_93';
    this.provisionongModelRegular = '#select_option_115';
    this.seriesDropDown = '#select_value_label_95';
    this.n1Serie = '#select_option_224';
    this.machineTypeDropDown = '#select_value_label_96';
    this.requiredMachineType = '#select_option_539';
    this.checkBoxAddGPUs = '(//*[@aria-label="Add GPUs"])[1]';
    this.GPUTypeDropDown = '#select_575';
    this.requiredGPUtype = '#select_option_582';
    this.numberOfGPUsDropDown = '#select_value_label_574';
    this.requiredNumberOfGPUs = '#select_option_585';
    this.localSSDDropDown = '#select_value_label_533';
    this.requiredLocalSSD = '#select_option_560';
    this.datacenterLocationDropDown = '#select_value_label_98';
    this.requiredDatacenterLocation = '#select_option_268';
    this.committedUsageDropDown = '#select_value_label_99';
    this.requiredCommittedUsage = '#select_option_138';
    this.addToEstimateBtn =
      '(//button[contains(text(), "Add to Estimate")])[1]';
    this.cookiesOkBtn = '//button[@class="devsite-snackbar-action"]';

    this.provisioningModel = '(//*[@class="md-list-item-text ng-binding"])[4]';
    this.instanceType =
      '(//*[@class="md-list-item-text ng-binding cpc-cart-multiline flex"])[1]';
    this.region = '(//*[@class="md-list-item-text ng-binding"])[1]';
    this.localSSD =
      '(//*[@class="md-list-item-text ng-binding cpc-cart-multiline flex"])[2]';
    this.commitmentTerm = '(//*[@class="md-list-item-text ng-binding"])[3]';
    this.totalEstimatedCost = '(//b[@class="ng-binding"])[2]';

    // this.emailEstimateBtn = '//*[@id="Email Estimate"]';
    // this.emailField = '#input_577';
    // this.sendEmailBtn = '//*[contains(text(), "Send Email")]';
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

  async pressKey(key) {
    await super.pressKey(key);
  }

  async switchFrame(howManyFrames) {
    await super.switchFrame(howManyFrames);
  }

  async acceptCookies() {
    await this.clickOnElemnt(this.cookiesOkBtn);
  }

  async chooseValueFromDropDown(dropDownSelector, valueSelector) {
    await this.clickOnElemnt(dropDownSelector);
    await this.clickOnElemnt(valueSelector);
  }

  async clearField(selector) {
    await super.clearField(selector);
  }

  async getElemet(selector) {
    const element = await super.getElemet(selector);
    return element;
  }

  // async switchWindow(handle) {
  //   await super.switchWindow(handle);
  // }

  // async getWindowHandle() {
  //   const handle = await super.getWindowHandle();
  //   return handle;
  // }
}

module.exports = new GoogleCloudPlatformPricingCalculator();
