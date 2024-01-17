const urls = require('../../../data/urls');
const inputValue = require('../../../data/inputValuse');
const outputCalc = require('../../../data/outputCalc');
const outputYopMail = require('../../../data/outputYopMail');
const googleCloudPlatformPricingCalculator = require('../../pageObjects/GoogleCloudPlatformPricingCalculator');
const yopMailIteraction = require('../../pageObjects/YopMailIteraction');

describe('Open website and fill in few fields with value.', async function () {
  let calcHandle;
  let email;
  let yopMailHandl;

  before(async function () {
    // await googleCloudPlatformPricingCalculator.openBrowserWithURL(
    //   urls.cloudGoogle
    // );
    await googleCloudPlatformPricingCalculator.openBrowserWithURL(
      urls.oldCalculator
    );
    // await googleCloudPlatformPricingCalculator.inputText(
    //   googleCloudPlatformPricingCalculator.searchEngine,
    //   inputValue.searchItemCloudGoogle
    // );
    // await googleCloudPlatformPricingCalculator.pressKey('Enter');
    // await googleCloudPlatformPricingCalculator.clickOnElemnt(
    //   googleCloudPlatformPricingCalculator.searchedItem
    // );
    await googleCloudPlatformPricingCalculator.acceptCookies();
    await googleCloudPlatformPricingCalculator.switchFrame(2);
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.computeEngineMode
    );
    await googleCloudPlatformPricingCalculator.inputText(
      googleCloudPlatformPricingCalculator.instances,
      inputValue.numberOfInstances
    );
    await googleCloudPlatformPricingCalculator.clearField(
      googleCloudPlatformPricingCalculator.intancesForField
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.softwareDropDown,
      googleCloudPlatformPricingCalculator.requiredSoftware
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.provisionongModelDropDown,
      googleCloudPlatformPricingCalculator.provisionongModelRegular
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.seriesDropDown,
      googleCloudPlatformPricingCalculator.n1Serie
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.machineTypeDropDown,
      googleCloudPlatformPricingCalculator.requiredMachineType
    );
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.checkBoxAddGPUs
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.GPUTypeDropDown,
      googleCloudPlatformPricingCalculator.requiredGPUtype
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.numberOfGPUsDropDown,
      googleCloudPlatformPricingCalculator.requiredNumberOfGPUs
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.localSSDDropDown,
      googleCloudPlatformPricingCalculator.requiredLocalSSD
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.datacenterLocationDropDown,
      googleCloudPlatformPricingCalculator.requiredDatacenterLocation
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.committedUsageDropDown,
      googleCloudPlatformPricingCalculator.requiredCommittedUsage
    );

    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.addToEstimateBtn
    );

    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.emailEstimateBtn
    );
    calcHandle = await googleCloudPlatformPricingCalculator.getWindowHandle();
    await yopMailIteraction.openNewWindowWithURL(urls.yopMail);
    await yopMailIteraction.acceptCookies();
    await yopMailIteraction.clickOnElemnt(yopMailIteraction.generateEmailBtn);
    email = await yopMailIteraction.getText(yopMailIteraction.email);
    yopMailHandl = await yopMailIteraction.getWindowHandle();
    await yopMailIteraction.switchToWindow(calcHandle);
    await googleCloudPlatformPricingCalculator.switchFrame(2);

    await googleCloudPlatformPricingCalculator.inputText(
      googleCloudPlatformPricingCalculator.emailField,
      email
    );
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.sendEmailBtn
    );
    await googleCloudPlatformPricingCalculator.switchToWindow(yopMailHandl);
    await yopMailIteraction.clickOnElemnt(yopMailIteraction.checkEmailBtn);
    await new Promise((r) => setTimeout(() => r(), 5000));
    await yopMailIteraction.clickOnElemnt(yopMailIteraction.refreshBtn);
    await new Promise((r) => setTimeout(() => r(), 2000));
    await browser.switchToFrame(await $(yopMailIteraction.iframeYopMail));
    await new Promise((r) => setTimeout(() => r(), 2000));
  });

  it(`compare ${outputCalc.totalEstimatedCostTask04} VS estimatedMonthlyCostFromYopMail`, async function () {
    const estimatedMonthlyCostFromYopMail = await yopMailIteraction.getElemet(
      yopMailIteraction.estimatedMonthlyCost
    );
    await expect(estimatedMonthlyCostFromYopMail).toHaveTextContaining(
      outputYopMail.estimatedMonthlyCost
    );
  });
});

// npm run task_04
