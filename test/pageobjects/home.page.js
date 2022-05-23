const Page = require('./page');
const utilities = require('../../utilities/util');

class HomePage extends Page {

    appselection_xpath = "//p[text()='?']"
    app_launcher_xpath = "//one-app-launcher-header/button[contains(@class, 'slds-button')]"
    app_view_all_xpath = "//button[@class='slds-button'][text()='View All']"


    async select_fieldticketing_app(){
        await $(this.app_launcher_xpath).click()
        await $(this.app_view_all_xpath).click()
        await $(this.appselection_xpath.replace("?", 'Field Ticketing')).click()
    }

    async select_fieldfxticketing_app(){
        // await $(this.app_launcher_xpath).click()
        await utilities.jsclick(this.app_launcher_xpath)
        // const elem = await $(this.app_launcher_xpath)
        // await browser.execute(async(elem) => {
        //     await elem.focus(); 
        //     await elem.click();
        // }, elem)
        await utilities.jsclick(this.app_view_all_xpath)
        await utilities.jsclick((this.appselection_xpath.replace("?", 'FX E-Ticketing')))
        
        // await $(this.app_view_all_xpath).click()
        // await $(this.appselection_xpath.replace("?", 'FX E-Ticketing')).click()
    }

}

module.exports = new HomePage();