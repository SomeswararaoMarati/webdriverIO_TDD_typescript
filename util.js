/**
* This Class includes all browser action methods
* 
*/
class util {
    /** 
    * Brief description of the function here.
    * @summary This doClick method performs click action on passed parameter.
    * @param {elem} is of dataType webElement. locator of elem on which click action has to be performed.
    * @param {label} - is of dataType string. It is the label of the element on which action has to be performed.
    * @return {void} No return type.
    */

    async doClick(elem, label) {
        var message = '===> ' + label + ' is not displayed'
        await browser.waitUntil(async () => await elem.isDisplayed() === true,
            {
                timeout: 60000,
                timeoutMsg: message
            });
        await elem.click();
    }

    async doSetValue(elem, value, label) {
        var message = '===> ' + label + ' is not displayed'
        await browser.waitUntil(async () => await elem.isDisplayed() === true,
            {
                timeout: 60000,
                timeoutMsg: message
            });
        await elem.setValue(value);
    }

    async waitForElement(elem, label) {
        var message = '===> ' + label + ' is not displayed'
        await console.log('Waiting for ' + label)
        await browser.waitUntil(async () => await elem.isDisplayed() === true,
            {
                timeout: 120000,
                timeoutMsg: message
            });
    }

    async waitForLoaderToInvisible() {
        const busyLoader = $('(//*[contains(@class,"-busyloader-")])[5]');
        await browser.waitUntil(EC.invisibilityOf(await busyLoader));
    }

    async doSelectVisibleText(elem, valueToSelect, label) {
        var message = '===> ' + label + ' is not displayed'
        await browser.waitUntil(async () => await elem.isDisplayed() === true,
            {
                timeout: 60000,
                timeoutMsg: message
            });
        await elem.selectByVisibleText(valueToSelect);
    }

    async generatePassword() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var _date = new Date();
        var mm = _date.getMonth();
        var mom = months[mm];
        var year = _date.getFullYear();
        return mom + '@' + year;
    }
}

module.exports = new util();
