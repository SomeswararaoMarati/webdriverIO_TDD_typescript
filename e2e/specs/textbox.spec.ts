describe('input text', async () =>{
    it('Enter Text', async () => {
        await browser.url('https://demoqa.com/text-box');
        await browser.maximizeWindow();
        await browser.pause(5000);
        (await $('#userName')).setValue('Test Name');
        await browser.scroll(1000,1000);
        (await $('button#submit')).click();
        await browser.pause(1000);
        const msg = (await $('p#name'))
        expect(await msg.getText()).toEqual('Name:Test Name');
    })
})