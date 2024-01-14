const urls = require('../../../data/urls');
const inputValue = require('../../../data/inputValuse');
const outputCalc = require('../../../data/outputCalc');
// const keys = require('../../../data/keys');
const googleCloudPlatformPricingCalculator = require('../../pageObjects/GoogleCloudPlatformPricingCalculator');

describe('Open website and fill in few fields with value.', async function () {
  // it(`open browser with URL [${urls.cloudGoogle}]`, async function () {
  //   await googleCloudPlatformPricingCalculator.openBrowserWithURL(
  //     urls.cloudGoogle
  //   );
  // });

  it(`open browser with URL [${urls.oldCalculator}]`, async function () {
    await googleCloudPlatformPricingCalculator.openBrowserWithURL(
      urls.oldCalculator
    );
  });

  // it(`input in search engine [${googleCloudPlatformPricingCalculator.searchEngine}] search item [${inputValue.searchItemCloudGoogle}]`, async function () {
  //   await googleCloudPlatformPricingCalculator.inputText(
  //     googleCloudPlatformPricingCalculator.searchEngine,
  //     inputValue.searchItemCloudGoogle
  //   );
  // });

  // it(`press [${keys.Enter}] key`, async function () {
  //   await googleCloudPlatformPricingCalculator.pressKey(keys.Enter);
  // });

  // it(`click on searched item [${googleCloudPlatformPricingCalculator.searchedItem}]`, async function () {
  //   await googleCloudPlatformPricingCalculator.clickOnElemnt(
  //     googleCloudPlatformPricingCalculator.searchedItem
  //   );
  // });

  it(`accept cookies`, async function () {
    await googleCloudPlatformPricingCalculator.acceptCookies();
  });

  it(`switch 2 frames`, async function () {
    await googleCloudPlatformPricingCalculator.switchFrame(2);
  });

  it(`click on Compute Engine mode [${googleCloudPlatformPricingCalculator.computeEngineMode}]`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.computeEngineMode
    );
  });

  it(`Number of instances: 4`, async function () {
    await googleCloudPlatformPricingCalculator.inputText(
      googleCloudPlatformPricingCalculator.instances,
      inputValue.numberOfInstances
    );
  });

  it(`What are these instances for?: оставить пустым`, async function () {
    await googleCloudPlatformPricingCalculator.clearField(
      googleCloudPlatformPricingCalculator.intancesForField
    );
  });

  it(`Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.softwareDropDown,
      googleCloudPlatformPricingCalculator.requiredSoftware
    );
  });

  it(`VM Class: Regular`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.provisionongModelDropDown,
      googleCloudPlatformPricingCalculator.provisionongModelRegular
    );
  });

  it(`Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.seriesDropDown,
      googleCloudPlatformPricingCalculator.n1Serie
    );
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.machineTypeDropDown,
      googleCloudPlatformPricingCalculator.requiredMachineType
    );
  });

  it(`Выбрать Add GPUs`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.checkBoxAddGPUs
    );
  });

  it(`GPU type: NVIDIA Tesla V100`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.GPUTypeDropDown,
      googleCloudPlatformPricingCalculator.requiredGPUtype
    );
  });

  it(`Number of GPUs: 1`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.numberOfGPUsDropDown,
      googleCloudPlatformPricingCalculator.requiredNumberOfGPUs
    );
  });

  it(`Local SSD: 2x375 Gb`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.localSSDDropDown,
      googleCloudPlatformPricingCalculator.requiredLocalSSD
    );
  });

  it(`Datacenter location: Frankfurt (europe-west3)`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.datacenterLocationDropDown,
      googleCloudPlatformPricingCalculator.requiredDatacenterLocation
    );
  });

  it(`Commited usage: 1 Year`, async function () {
    await googleCloudPlatformPricingCalculator.chooseValueFromDropDown(
      googleCloudPlatformPricingCalculator.committedUsageDropDown,
      googleCloudPlatformPricingCalculator.requiredCommittedUsage
    );
  });

  it(`Нажать Add to Estimate`, async function () {
    await googleCloudPlatformPricingCalculator.clickOnElemnt(
      googleCloudPlatformPricingCalculator.addToEstimateBtn
    );
  });

  it(`Проверить соответствие данных следующих полей: VM Class`, async function () {
    const element = await googleCloudPlatformPricingCalculator.getElemet(
      googleCloudPlatformPricingCalculator.provisioningModel
    );
    await expect(element).toHaveTextContaining(outputCalc.provisioningModel);
  });

  it(`Проверить соответствие данных следующих полей: Instance type`, async function () {
    const element = await googleCloudPlatformPricingCalculator.getElemet(
      googleCloudPlatformPricingCalculator.instanceType
    );
    await expect(element).toHaveTextContaining(outputCalc.instanceType);
  });

  it(`Проверить соответствие данных следующих полей: Region`, async function () {
    const element = await googleCloudPlatformPricingCalculator.getElemet(
      googleCloudPlatformPricingCalculator.region
    );
    await expect(element).toHaveTextContaining(outputCalc.region);
  });

  it(`Проверить соответствие данных следующих полей: local SSD`, async function () {
    const element = await googleCloudPlatformPricingCalculator.getElemet(
      googleCloudPlatformPricingCalculator.localSSD
    );
    await expect(element).toHaveTextContaining(outputCalc.localSSD);
  });

  it(`Проверить соответствие данных следующих полей: commitment term`, async function () {
    const element = await googleCloudPlatformPricingCalculator.getElemet(
      googleCloudPlatformPricingCalculator.commitmentTerm
    );
    await expect(element).toHaveTextContaining(outputCalc.commitmentTerm);
  });

  it(`Проверить соответствие данных следующих полей: monthly rent`, async function () {
    const element = await googleCloudPlatformPricingCalculator.getElemet(
      googleCloudPlatformPricingCalculator.totalEstimatedCost
    );
    await expect(element).toHaveTextContaining(outputCalc.totalEstimatedCost);
    // await new Promise((r) => setTimeout(() => r(), 5000));
  });
});

// npm run task_03
