describe('Check box', async () =>{
    it('Select Check boxes', async () => {
        await browser.url('https://practice.expandtesting.com/checkboxes');
        await browser.maximizeWindow();
        await browser.pause(5000);

        var chekBox1 = await $('#checkbox1')
    

         var attributeValue = await chekBox1.getAttribute('checked');
         expect(await attributeValue).toBe(null)

        await chekBox1.click();
        await browser.pause(5000);


        attributeValue = await chekBox1.getAttribute('checked');
        expect(await attributeValue).toBe("true")


    })
})