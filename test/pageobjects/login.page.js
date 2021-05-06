const usersData = require('../../userMapping.json');
const path = require('path')

/**
* LoginPage class includes pageObjects and methods to work with login Page
*/
class LoginPage {

  get inputUsername() { return $('#txtLogin') }
  get inputPassword() { return $('#txtPassword') }
  get btnSubmit() { return $('#btnSignIn') }
  get btnIndirectTaxTile() { return $('.//span[contains(text(),"Indirect Tax")]') }
  get iFrame() { return $('#iframe-app-container') }
  get menuCompanies() { return $('.//*[text()="Companies"]') }
  get btnProfile() { return $('#UserProfile-Dropdown-Button') }
  get btnSignOut() { return $('#signOutLink') }


  /** 
    * Brief description of the function here.
    * @summary launchApplication method launches the url on browser and maximize the browser to full screen
    * @return {void} - This method return void
    */
  async launchApplication() {
    await browser.url('/');
    await browser.maximizeWindow();
  }

  /** 
  * Brief description of the function here.
  * @summary enterCredentials method used to login to application with values provided
  * @param {username}  - username and dataType is string.
  * @param {password}  - password and dataType is string.
  * @return {void} - This method return void
  */
  async enterCredentials(username, password) {
    await util.doSetValue(await this.inputUsername, username, 'username');
    await util.doSetValue(await this.inputPassword, password, 'password');
    await util.doClick(await this.btnSubmit, 'signIn');
    await util.doClick(await this.btnIndirectTaxTile, 'indirect Tax Tile');
    await browser.switchToFrame(await this.iFrame);
    await util.waitForElement(await this.menuCompanies, 'Companies menu');
    //await util.doClick(await this.menuCompanies, 'Companies');
  }

  async launchAndLoginToApp(fileName) {
    await this.launchApplication();
    await util.doSetValue(await this.inputUsername, await this.getUserName(fileName), 'username');
    await util.doSetValue(await this.inputPassword, await this.getPassword(), 'Password');
    await util.doClick(await this.btnSubmit, 'signIn');
    await util.doClick(await this.btnIndirectTaxTile, 'indirect Tax Tile');
    await browser.switchToFrame(await this.iFrame);
    await util.waitForElement(await this.menuCompanies, 'Companies menu');
  }

  async getUserName(fileName) {
    if (process.env.user === '') {
      process.env.user = await JSON.stringify(usersData[fileName]).slice(1, -1);
      console.log('=========>' + process.env.user);
    }
    return process.env.user;
  }

  async getPassword() {
    if (process.env.password === '') {
      var _password = await util.generatePassword();
      process.env.password = _password;
      console.log('=========>' + process.env.user);
    }
    return process.env.password;
  }

  /** 
    * @summary logout method clicks on profile and then on signout button
    * @return {void} - This method return void
    */
  async logout() {
    await browser.switchToParentFrame();
    await util.doClick(await this.btnProfile);
    await util.doClick(await this.btnSignOut);
  }

}

module.exports = new LoginPage();
