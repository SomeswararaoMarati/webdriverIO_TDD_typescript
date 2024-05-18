describe("Web Table", async () => {
    const rowsReader = [];
    const colsReader = [];


  it("Add Record to table", async () => {
    await browser.url("https://practice.expandtesting.com/dynamic-table");
    await browser.maximizeWindow();

    // Get all td elements in the first column
    const colms = await $$("//tbody/tr/td[1]");

    // Loop through each td element and print its text content
    for (const col of colms) {
      const text = await col.getText();
      rowsReader.push(text);    
    }
    const headers = await $$("//thead/tr/th");

    for (const col of headers) {
      const text = await col.getText();
      colsReader.push(text);
    }
    const ValueToValidate = await $('#chrome-cpu');
    var values = await ValueToValidate.getText();
    var divideTheString = values.split(' ');

    var rowIndex = rowsReader.indexOf(divideTheString[0]);
    var colIndex = colsReader.indexOf(divideTheString[1].slice(0, -1));

    var FetchMatchingValueElem = await $(`//tbody/tr[${rowIndex + 1}]/td[${colIndex + 1}]`);
    var FetchMatchingValue = await FetchMatchingValueElem.getText();
    expect(await (FetchMatchingValue)).toEqual(divideTheString[2])
    });
});
