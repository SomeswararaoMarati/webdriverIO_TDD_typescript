describe("Testing button", async () => {
  it("dynamic clicking on button", async () => {
    await browser.url("https://practice.expandtesting.com/add-remove-elements");
    await browser.maximizeWindow();
    await browser.pause(5000);
    (await $(".btn.btn-primary")).click();
    await browser.pause(2000);
    var deleteBtn = await $("div button.added-manually");
    expect(await deleteBtn.isDisplayed()).toBe(true);
  });

  it("Click on delete button and verify the button is disappeared", async () => {
    var deleteBtn = await $("div button.added-manually");
    await deleteBtn.click();
    await browser.pause(3000);
    expect(await deleteBtn.isDisplayed()).toBe(false);
  });
});
