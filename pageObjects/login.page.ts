import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  
    public get inputUsername () {
        return $('input[name="username"]');
    }

    public get inputPassword () {
        return $('input[name="password"]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get profileDD(){
        return $('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
    }

    public get profileOption(){
        return $('(//a[@role="menuitem"])[1]')
    }

    public get supportOption(){
        return $('(//a[@role="menuitem"])[2]')
    }

    public get changepasswordOption(){
        return $('(//a[@role="menuitem"])[3]')
    }


    public get logoutOption(){
        return $('(//a[@role="menuitem"])[4]')
    }



    /**
     * Methods to encapsule automation code to interact with the page objects
     */

    
    //Open the application in browser
    async openApplications() {
        await browser.maximizeWindow()
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    //Login to application using valid credentials
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    async logout(){
        (await this.profileDD).click();
        await browser.pause(2000);
        (await this.logoutOption).click();
        await browser.pause(2000);
    }
}

export default new LoginPage();
