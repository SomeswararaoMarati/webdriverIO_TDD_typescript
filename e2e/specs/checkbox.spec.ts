describe('Check box', async () =>{
    it('Select Check boxes', async () => {
        await browser.url('https://demoqa.com/checkbox');
        await browser.maximizeWindow();
        await browser.pause(5000);
        (await $('button[title="Toggle"]')).click();
        await browser.pause(1000);
        (await $('(//button[@title="Toggle"])[2]')).click();
        await browser.pause(1000);
        (await $('(//span[@class="rct-checkbox"])[3]')).click();
        await browser.pause(1000);
        const msg = (await $('span.text-success'))
        expect(await msg.getText()).toEqual('notes');

    })
})