const BaseInteraction = require('./BaseInteraction');

class GoogleCloudPlatformPricingCalculator extends BaseInteraction {
  constructor() {
    super();
    this.searchEngine = '//*[@class="mb2a7b"]';
    this.searchedItem =
      '(//*[contains(text(), "Google Cloud Pricing Calculator")])[1]';
    this.addToEstimateBtn = '(//button[@jscontroller="O626Fe"])[1]';
    this.computeEngineMode = '(//*[@class="VobRQb"])[1]';

    this.switcherAdvancedSettings = '//*[starts-with(@jslog, "198391")]';
    this.numOfInstancesField = '(//input[@type="number"])[1]';
    this.dropDownOperatinsSyst =
      '//*[@aria-labelledby="c19 c21" and @role="combobox"]';
    this.requiredOperSyst =
      '//*[starts-with(@data-708c49e2-dcf0-4d62-b457-88577bfe3081, "Free: Debian")]';
    this.provisioningModel = '//label[contains(text(), "Regular")]';
    this.dropDownMachineType = '//*[@aria-labelledby="c31 c33"]';
    this.requiredMachineType = '//*[@data-value="n1-standard-8"]';
    this.switcherAddGPUs = '//*[@aria-label="Add GPUs"]';
    this.dropDownGPU = '//*[@aria-labelledby="c577 c579"]'; //
    this.requiredGPU = '//*[@data-value="nvidia-tesla-v100"]'; //
    this.dropDownNumberGPUs = '//*[@aria-labelledby="c1350 c1352"]'; //
    this.requiredNumberGPUs = '(//*[@data-value="1"])[1]'; //
    this.dropDownLocalSSD = '//*[@aria-labelledby="c39 c41"]';
    this.requiredLocalSSD = '(//*[@data-value="2"])[2]';
    this.dropDownRegion = '//*[@aria-labelledby="c43 c45"]';
    this.requiredRegion = '//*[@data-value="europe-west1"]';
    this.oneYearCommitedUse = '//*[contains(text(),"1 year")]';
    this.monthCost = '//label[@class="gt0C8e MyvX5d"]';

    this.cookiesOkBtn = '//button[@class="pvUife"]';
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
}

module.exports = new GoogleCloudPlatformPricingCalculator();
