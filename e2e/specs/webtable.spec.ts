describe('Web Table', async () =>{
    it('Add Record to table', async () => {
        await browser.url('https://demoqa.com/webtables');
        await browser.maximizeWindow();
        await browser.pause(5000);
        await (await $('button#addNewRecordButton')).click();
        (await $('#firstName')).setValue('FirstName');
        (await $('#lastName')).setValue('LastName');
        (await $('button#submit')).click();
        await browser.pause(1000);
        const msg = (await $('p#name'))
        expect(await msg.getText()).toEqual('Name:Test Name');
    })
})