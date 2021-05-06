const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const ReportsPage = require('../pageobjects/reports.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.launchApplication();
        await LoginPage.enterCredentials('Someswara.Marati.vcr', 'Password@135');
    });

    it('Navigate to Analytics Reports -> Custom reports and add fields to Filters', async () => {
        await HomePage.navigateTo('Reports & Analytics');
        await ReportsPage.navigateToCustomReports();
        await ReportsPage.addFieldTo('VCT Applied Flag', 'Create Filter');
        await browser.pause(2000);
    })

    it('Custom reports and add fields Groups and Columns', async () => {
        await ReportsPage.addFieldTo('Account Assignment', 'Add as Column');
        await browser.pause(3000);
        await ReportsPage.addFieldTo('Bill To District', 'Add as Group');
    })

    it('Remove fields from Groups and Columns', async () => {
        await browser.pause(3000);
        await ReportsPage.removeColumnOrGroup('Account Assignment');
        await browser.pause(2000);
        await ReportsPage.removeColumnOrGroup('Bill To District');
    })
    it('Remove fields from Filters', async () => {
        await browser.pause(2000);
        await ReportsPage.removeFilter('VCT Applied Flag');
    })

    it('Change Columns Positions', async () => {
        await browser.pause(2000);
        //await browser.debug();
        await ReportsPage.getAllDisplayedColumns();
        await ReportsPage.moveColumnDirection('Company Name', 'Right');
        await ReportsPage.moveColumnDirection('Company Name', 'Right');
        await ReportsPage.moveColumnDirection('Company Name', 'Right');
        await browser.pause(2000);
        await ReportsPage.moveColumnDirection('Company Name', 'Left');
        await ReportsPage.moveColumnDirection('Company Name', 'Left');
        await ReportsPage.moveColumnDirection('Company Name', 'Left');

    });

})
