/**
* HomePage Class includes all home page elements and navigation mathods to different pages from home Page
*/
class HomePage {

    get tool() { return $('.//*[text()="Tools"]') }
    get toolTax() { return $('.//*[text()="Tax Tools"]') }
    get modelScenarios() { return $('.//*[text()="Model Scenario"]') }
    get icoBusyLoader() { return $('(//*[contains(@class,"-busyloader-")])[5]') }


    async navigateTo(themes) {
        var lnks = themes.split('|');
        if (lnks[0]) {
            await (await $('.//*[text()="' + lnks[0].trim() + '"]')).click();
        }
        if (lnks[1]) {
            await (await $('.//*[text()="' + lnks[1].trim() + '"]')).click();
        }
        if (lnks[2]) {
            await (await $('.//*[text()="' + lnks[2].trim() + '"]')).click();
        }
        await (await this.icoBusyLoader).waitForDisplayed({ timeout: 18000, reverse: true, timeoutMsg: 'Bento is still loading', interval: 2000 })

    }
}

module.exports = new HomePage();

