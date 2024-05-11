import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddUserPage {
  
    
    public get profileDD(){
        return $('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
    }

    public get aboutOption(){
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

    public get companyName(){
        return $('div[role="document"] div:nth-child(2) > p')
    }

    public get closeBtn(){
        return $('button.oxd-dialog-close-button')
    }

    public get customerSupportTitle(){
        return $('.orangehrm-sub-title')
    }

    public get changePasswordTitle(){
      return $('h6.orangehrm-main-title')
    }



    /**
     * Methods to encapsule automation code to interact with the page objects
     */

    async validateAbout(){
        (await this.profileDD).click();
        (await this.aboutOption).click();
        await browser.pause(1000);
        (await this.closeBtn).click();
    }

    async validateSupport(){
        (await this.profileDD).click();
        (await this.supportOption).click();
        await browser.pause(1000);
        expect(await this.customerSupportTitle.getText()).toBe('Customer Support');
    }

    async validateChangePassword(){
        (await this.profileDD).click();
        (await this.changepasswordOption).click();
        await browser.pause(2000);
        expect(await this.changePasswordTitle.getText()).toBe('Update Password');
        await browser.pause(1000);
    }
}

export default new AddUserPage();
