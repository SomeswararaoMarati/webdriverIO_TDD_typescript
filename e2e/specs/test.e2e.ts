import LoginPage from '../pageObjects/login.page.js'
import HomePage from '../pageObjects/home.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openApplications()
        await LoginPage.login('Admin', 'admin123');
        await browser.pause(5000);
    })

    it('Validate About options',async () => {
        await HomePage.validateAbout()
    })

    it('Validate Customer Support options',async () => {
        await HomePage.validateSupport()
    })

    it('Validate Change password options',async () => {
        await HomePage.validateChangePassword()
    })

    it('Logout', async() => {
        await LoginPage.logout()
    })

})

