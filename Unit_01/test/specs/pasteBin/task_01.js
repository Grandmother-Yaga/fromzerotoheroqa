const urls = require('../../../data/urls');
const inputValue = require('../../../data/inputValuse');
const pasteBinInteraction = require('../../pageObjects/PasteBinInteraction');

describe('Open website and fill in few fields with value', async function () {
  it(`open browser with URL [${urls.pasteBin}]`, async function () {
    await pasteBinInteraction.openBrowserWithURL(urls.pasteBin);
    await pasteBinInteraction.acceptPopUp();
  });

  it(`input text [${inputValue.task01Paste}] into "New Paste" filed [${pasteBinInteraction.newPasteField}]`, async function () {
    await pasteBinInteraction.inputText(
      pasteBinInteraction.newPasteField,
      inputValue.task01Paste
    );
  });

  it(`set Paste Expiration drop down [${pasteBinInteraction.pasteExpirationDropDown}] as [10 Min]`, async function () {
    await pasteBinInteraction.chooseValueFromDropDown(
      pasteBinInteraction.pasteExpirationDropDown,
      pasteBinInteraction.tenMin
    );
  });

  it(`input text [${inputValue.task01PasteNameTitle}] into "Paste Name / Title" filed [${pasteBinInteraction.pasteNameTitle}]`, async function () {
    await pasteBinInteraction.inputText(
      pasteBinInteraction.pasteNameTitle,
      inputValue.task01PasteNameTitle
    );
    await new Promise((r) => setTimeout(() => r(), 5000));
  });
});

// npm run task_01
