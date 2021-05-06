
/**
* CompaniesPage class includes pageObjects and methods of Companies Page
*/
class ReportsPage {

    // Companies Page
    get btnCreateReport() { return $('#create-report-button') }
    get btnCustomReport() { return $('.//span[text()="Custom Report"]') }
    get btnGearIcon() { return $('div.selector.mutton') }
    get frameReportingFrame() { return $('#_reportingUIFrame') }
    get inputFieldType() { return $('.control.searchLockup div input') }
    get frameEditFrame() { return $('#edit-content-1') }
    get previewIcon() { return $('.//button[@id="presentation"]') };
    get searchIcon() { return $('a.button.search.up') }
    get removeFilterOption() { return $('.//p[text()="Remove Filter"]') }


    async navigateToCustomReports() {
        await browser.switchToFrame(await this.frameReportingFrame);
        await util.doClick(await this.btnCreateReport, 'Create Report');
        await util.doClick(await this.btnCustomReport, 'Custom Report');
        await util.waitForElement(await this.frameEditFrame, 'Search Frame');
        await browser.switchToFrame(await this.frameEditFrame);
        //await browser.waitForElement(await this.searchIcon)
        await (await this.searchIcon).waitForClickable({ timeout: 30000, reverse: false, timeoutMsg: 'Field Type is not displayed', interval: 3000 })
    }


    async addFieldTo(fieldName, Option) {
        await util.doClick(await this.inputFieldType, 'Field Type');
        await util.doSetValue(await this.inputFieldType, fieldName, ' Field');
        await util.doClick(await this.searchIcon, 'Search Icon');
        var obj = $('.//p[text()="' + fieldName + '"]');
        await browser.pause(3000);
        await util.doClick(await obj, fieldName);
        await browser.pause(3000);
        await browser.keys(['Shift', 'F10'])
        await browser.pause(5000);
        var opt = $('.//p[text()="' + Option + '"]');
        await util.doClick(await opt, Option);
    }

    async removeColumnOrGroup(fieldType) {
        var fieldToRemoveFromColOrGroup = $('.//span[text()="' + fieldType + '"]/following-sibling::span[@class="icon remove"]')
        await util.doClick(await fieldToRemoveFromColOrGroup, fieldType);
    }

    async removeFilter(filterName) {
        var objfilterToRemove = $('.//span[contains(@title,"' + filterName + '")]/parent::div/following-sibling::div[2]/span');
        await util.doClick(await objfilterToRemove, filterName);
        await util.doClick(await this.removeFilterOption, 'Remove Filter');
    }

    async moveColumnDirection(columnName, direction) {
        var columnToMove = $('.//th[@data-fielddisplay="' + columnName + '"]')
        await util.doClick(await columnToMove, columnName);
        await browser.pause(2000);
        if (direction === 'Right') browser.keys(['ArrowRight'])
        else if (direction === 'Left') browser.keys(['ArrowLeft'])
    }

    async getAllDisplayedColumns() {
        console.log(await $$('.//div[contains(@id,"columnOverlay")]').length)
        //var _elemCount = await columnToMove.length;
        //console.log('===>' + _elemCount)
    }

}

module.exports = new ReportsPage();
