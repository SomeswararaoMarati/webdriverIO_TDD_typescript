
/**
* CompaniesPage class includes pageObjects and methods of Companies Page
*/
class CompaniesPage {

    // Companies Page
    get inputGridCompanyName() { return $('#filter-input-companyName') }
    get btnDeleteIcon() { return $('.bento-icon-remove.grid-action-icon') }
    get btnDeleteOnAlert() { return $('.//button[text()="Delete"]') }
    get btnEditIcon() { return $('.bento-icon-edit.grid-action-icon.edit-button') }
    get btnMore() { return $('.btn.btn-default.btn-xs.more-actions-btn.dropdown-toggle') }
    get btnTaxJurisdictionOnMore() { return $('.//a[contains(text(),"Tax Jurisdiction")]') }

    //Add Companyies Page
    get btnAddCompany() { return $('.bento-icon-add ') }
    get ddCompanyType() { return $('#companyType') }
    get comboParentCompany() { return $('.//input[@placeholder="Select Parent Company"] ') }
    get inputCompanyName() { return $('#companyName') }
    get inputExternalId() { return $('#externalId') }
    get inputShortName() { return $('#shortName') }
    get inputLegalName() { return $('#legalEntityName') }
    get btnNext() { return $('.//span[text()="Next"]/parent::button') }
    get btnPrevious() { return $('.//span[text()="Previous"]/parent::button') }
    get btnCancel() { return $('.//button[contains(text(),"Cancel")]') }
    get btnSavenAndAddTaxJurisdiction() { return $('.//button[contains(text(),"Save and Add Tax Jurisdiction")]') }
    get btnSave() { return $('.//button[contains(text(),"Save")]') }
    get confirmAlertMsg() { return $('.bento-alert-container.bento-animate.ng-scope.ng-isolate-scope') }

    async selectCompany(companyName) {
        await util.doSetValue(await this.comboParentCompany, companyName, 'Company Name');
        await (await $('.//*[text()="' + companyName + '"]')).click();
    }

    async selectActionsFromMore(option) {
        await util.doClick(await this.btnMore, 'More');
        var optionToSelect = $('.//a[contains(text(),"' + option + '")]');
        await util.doClick(await optionToSelect, option);
    }

    async addParentCompany(CompanyName) {
        var companyType = "Parent";
        var parentCompanyName = "WDIO_Company1"
        await util.doClick(await this.btnAddCompany, 'Add Company');
        await util.doSelectVisibleText(await this.ddCompanyType, companyType, 'Company Type');
        if (companyType === 'Child') await (await this.selectCompany(parentCompanyName));
        await util.doClick(await this.inputCompanyName, 'Company Name');
        await util.doSetValue(await this.inputCompanyName, CompanyName, 'Company Name');
        await util.doSetValue(await this.inputExternalId, CompanyName, 'External Id');
        await util.doSetValue(await this.inputShortName, CompanyName, 'Short Name');
        await util.doSetValue(await this.inputLegalName, CompanyName, 'Legal Name');
        await util.doClick(await this.btnNext, 'Next');
        await util.doClick(await this.btnNext, 'Next');
        await util.doClick(await this.btnNext, 'Next');
        await util.doClick(await this.btnNext, 'Next');
        await util.doClick(await this.btnNext, 'Next');
        await util.doClick(await this.btnNext, 'Next');
        await util.doClick(await this.btnSave, 'Save');
        await browser.pause(10000);
    }

    async deleteCompany(companyName) {
        var cName = companyName;
        await util.doSetValue(await this.inputGridCompanyName, cName, 'Company Name');
        var companyToDeleteObj = $('.//a[@title="' + cName + '"]');
        await (await companyToDeleteObj).waitForClickable();
        await browser.pause(2000);
        await util.doClick(await this.btnDeleteIcon, 'Delete icon');
        await (await this.btnDeleteOnAlert).waitForClickable();
        await util.doClick(await this.btnDeleteOnAlert, 'Delete on Alert');
        await browser.pause(3000);
    }
}

module.exports = new CompaniesPage();
