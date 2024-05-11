describe('Testing button', async () =>{
    it('dynamic clicking on button', async () => {
        await browser.url('https://demoqa.com/buttons');
        await browser.maximizeWindow();
        await browser.pause(5000);
        (await $('(//button[@class="btn btn-primary"])[3]')).click();
        await browser.pause(2000);
        const msg = await $('p#dynamicClickMessage').getText();
        expect(msg).toBe('You have done a dynamic click');
        await browser.pause(1000);
    })

    it('right clicking on button', async () => {
        const rightClickBtn = await $('#rightClickBtn');
        await rightClickBtn.click({button : 'right'});        
        await browser.pause(2000);
        const msg = await $('p#rightClickMessage').getText();
        expect(msg).toBe('You have done a right click');
        await browser.pause(1000);
    })

    it('double click on button', async () => {
        const rightClickBtn = await $('#doubleClickBtn');
        await rightClickBtn.doubleClick();        
        await browser.pause(2000);
        const msg = await $('p#doubleClickMessage').getText();
        expect(msg).toBe('You have done a double click');
        await browser.pause(1000);
    })
})