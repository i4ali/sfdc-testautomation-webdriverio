const Page = require('./page');
const EC = require('wdio-wait-for');
const utilities = require('../../utilities/util');
const sf = require('../../utilities/salesforceapi');

class FieldFxTicketHomePage extends Page {

    contact_rotations_tab_xpath = "//a[@title='Contact Rotations']/span[text()='Contact Rotations']"

    
    async click_contact_rotations_tab(){
        
        // await utilities.jsclick(this.contact_rotations_tab_xpath)
        let o_url = await sf.form_url_for_object('FX5__Contact_Rotation2__c')
        await browser.url(o_url)

    }




}

module.exports = new FieldFxTicketHomePage();