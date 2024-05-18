describe('input text', async () =>{
    it('Enter Text', async () => {
        await browser.url('https://practice.expandtesting.com/inputs');
        await browser.maximizeWindow();
        var name = 'ABCD';
        var number = '1234';
        var password = 'A1B2C3D4';
        var date = '25062024';
        (await $('#input-number')).setValue(number);
        (await $('#input-text')).setValue(name);
        (await $('#input-password')).setValue(password);
        await browser.pause(2000);
        (await $('#btn-display-inputs')).click();
        await browser.pause(2000);
        const outputNumber = (await $('#output-number'))
        const outputName = (await $('#output-text'))
        const outputpassword = (await $('#output-password'))

        expect(await outputNumber.getText()).toEqual(number);
        expect(await outputName.getText()).toEqual(name);
        expect(await outputpassword.getText()).toEqual(password);

    })
})