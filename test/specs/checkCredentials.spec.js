const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const CompaniesPage = require('../pageobjects/companies.page');
const path = require('path')
var fileName = path.basename(__filename)


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.launchAndLoginToApp(fileName);
    });
    it('Navigate to Companies and Create the Company', async () => {
        await HomePage.navigateTo('Companies');
        await CompaniesPage.addParentCompany('WDIO_Company1');
        expect(await this.confirmAlertMsg).toHaveTextContaining('Successfully');
        await LoginPage.logout();
    })
});


