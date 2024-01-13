const urls = require('../../../data/urls');
const inputValue = require('../../../data/inputValuse');
const outputPasteBin = require('../../../data/outputPasteBin');
const pasteBinInteraction = require('../../pageObjects/PasteBinInteraction');

describe('Open website, fill in few fields with value and verify it', async function () {
  it(`open browser with URL [${urls.pasteBin}]`, async function () {
    await pasteBinInteraction.openBrowserWithURL(urls.pasteBin);
    await pasteBinInteraction.acceptPopUp();
  });

  it(`input text [${inputValue.task02Paste}] into "New Paste" filed [${pasteBinInteraction.newPasteField}]`, async function () {
    await pasteBinInteraction.inputText(
      pasteBinInteraction.newPasteField,
      inputValue.task02Paste
    );
  });

  it(`set Syntax Highlighting drop down [${pasteBinInteraction.syntaxHighlightingDropDonw}] as [Bash]`, async function () {
    await pasteBinInteraction.chooseValueFromDropDown(
      pasteBinInteraction.syntaxHighlightingDropDonw,
      pasteBinInteraction.bushSyntax
    );
  });

  it(`set Paste Expiration drop down [${pasteBinInteraction.pasteExpirationDropDown}] as [10 Min]`, async function () {
    await pasteBinInteraction.chooseValueFromDropDown(
      pasteBinInteraction.pasteExpirationDropDown,
      pasteBinInteraction.tenMin
    );
  });

  it(`input text [${inputValue.task02PasteNameTitle}] into "Paste Name / Title" filed [${pasteBinInteraction.pasteNameTitle}]`, async function () {
    await pasteBinInteraction.inputText(
      pasteBinInteraction.pasteNameTitle,
      inputValue.task02PasteNameTitle
    );
  });

  it(`click button "Create New Paste" [${pasteBinInteraction.btnCreateNewPaste}]`, async function () {
    await pasteBinInteraction.clickOnElemnt(
      pasteBinInteraction.btnCreateNewPaste
    );
  });

  it(`title of the tab should be equal to [${outputPasteBin.tabTitle}]`, async function () {
    await expect(browser).toHaveTitle(outputPasteBin.tabTitle);
  });

  it(`syntax highlighting [${pasteBinInteraction.bashField}] shoud be equal to [${outputPasteBin.syntaxHighlightingBash}]]`, async function () {
    const element = await pasteBinInteraction.getElemet(
      pasteBinInteraction.bashField
    );
    await expect(element).toHaveTextContaining(
      outputPasteBin.syntaxHighlightingBash
    );
  });

  it(`paste expitation [${pasteBinInteraction.pasteExpirationField}] shoud be equal to [${outputPasteBin.pasteExpiration}]`, async function () {
    const element = await pasteBinInteraction.getElemet(
      pasteBinInteraction.pasteExpirationField
    );
    await expect(element).toHaveTextContaining(outputPasteBin.pasteExpiration);
  });

  it(`paste itself [${pasteBinInteraction.pasteFiled}] shoud be equal to [${inputValue.task02Paste}]`, async function () {
    const element = await pasteBinInteraction.getElemet(
      pasteBinInteraction.pasteFiled
    );
    await expect(element).toHaveTextContaining(inputValue.task02Paste);
  });
});

// npm run task_02
