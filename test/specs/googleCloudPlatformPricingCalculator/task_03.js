const urls = require('../../../data/urls');
const inputValue = require('../../../data/inputValuse');
const outputCalc = require('../../../data/outputCalc');
const googleCloudPlatformPricingCalculator = require('../../pageObjects/GoogleCloudPlatformPricingCalculator');

describe('Open website and fill in few fields with value.', async function () {
  it(`open browser with URL [${urls.cloudGoogle}]`, async function () {
    await googleCloudPlatformPricingCalculator.openBrowserWithURL(
      urls.cloudGoogle
    );
  });

  it(`input in search engine [${googleCloudPlatformPricingCalculator.searchEngine}] search item [${inputValue.searchItemCloudGoogle}]`, async function () {
    await googleCloudPlatformPricingCalculator.inputText(
      googleCloudPlatformPricingCalculator.searchEngine,
      inputValue.searchItemCloudGoogle
    );
  });

  it(`press 'Enter' key`, async function () {
    await googleCloudPlatformPricingCalculator.pressKey('Enter');
  });

  it(`click on searched item [${googleCloudPlatformPricingCalculator.searchedItem}]`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.searchedItem
    );
  });

  it(`accept cookies`, async function () {
    await googleCloudPlatformPricingCalculator.acceptCookies();
  });

  it(`click on "+ Add to estimate" [${googleCloudPlatformPricingCalculator.addToEstimateBtn}]`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.addToEstimateBtn
    );
  });

  it(`click on Compute Engine mode [${googleCloudPlatformPricingCalculator.computeEngineMode}]`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.computeEngineMode
    );
  });

  it(`Set advanced setting [${googleCloudPlatformPricingCalculator.switcherAdvancedSettings}]`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.switcherAdvancedSettings
    );
  });

  it(`Set [${inputValue.numberOfInstances}] into "Number of instances" [${googleCloudPlatformPricingCalculator.numOfInstancesField}]`, async function () {
    await googleCloudPlatformPricingCalculator.clearField(
      googleCloudPlatformPricingCalculator.numOfInstancesField
    );
    await googleCloudPlatformPricingCalculator.inputText(
      googleCloudPlatformPricingCalculator.numOfInstancesField,
      inputValue.numberOfInstances
    );
  });

  it(`Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.dropDownOperatinsSyst,
      googleCloudPlatformPricingCalculator.requiredOperSyst
    );
  });

  it(`Click on "Regular" [${googleCloudPlatformPricingCalculator.provisioningModel}]`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.provisioningModel
    );
  });

  it(`Set Machine type: n1-standard-8	(vCPUs: 8, RAM: 30 GB)`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.dropDownMachineType,
      googleCloudPlatformPricingCalculator.requiredMachineType
    );
  });

  it(`Выбрать Add GPUs`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.switcherAddGPUs
    );
  });

  // it(`Set GPU type: NVIDIA Tesla V100`, async function () {
  //   await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
  //     googleCloudPlatformPricingCalculator.dropDownGPU,
  //     googleCloudPlatformPricingCalculator.requiredGPU
  //   );
  //   await new Promise((r) => setTimeout(() => r(), 10000));
  // });

  // it(`Set Number of GPUs: 1`, async function () {
  //   await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
  //     googleCloudPlatformPricingCalculator.dropDownNumberGPUs,
  //     googleCloudPlatformPricingCalculator.requiredNumberGPUs
  //   );
  //   await new Promise((r) => setTimeout(() => r(), 10000));
  // });

  it(`Set Local SSD: 2x375 Gb`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.dropDownLocalSSD,
      googleCloudPlatformPricingCalculator.requiredLocalSSD
    );
  });

  it(`Datacenter location: Belgium (europe-west1)`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.dropDownRegion,
      googleCloudPlatformPricingCalculator.requiredRegion
    );
  });

  it(`Commited usage: 1 Year`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.oneYearCommitedUse
    );
  });

  it(`Проверить соответствие данных следующих полей: ESTIMATED COST`, async function () {
    const monthCost = await googleCloudPlatformPricingCalculator.getElemet(
      googleCloudPlatformPricingCalculator.monthCost
    );
    await expect(monthCost).toHaveTextContaining(outputCalc.monthCost);
    // await new Promise((r) => setTimeout(() => r(), 5000));
  });
});

// npm run task_03
