const Page = require('./page');
const EC = require('wdio-wait-for');
const utilities = require('../../utilities/util');

class FieldFxTicketContactRotationPage extends Page {

    edit_button_xpath = "//button[text()='Edit']"
    end_date_input_xpath = "//input[@name='FX5__End_Date__c']"
    save_button_xpath = "//button[text()='Save']"
    end_date_xpath = "//span[text()='End Date']/ancestor::records-record-layout-item//lightning-formatted-text"


    async edit_contact_rotations(end_date) {
        await utilities.jsclick(this.edit_button_xpath)
        await utilities.custom_setvalue(this.end_date_input_xpath, end_date)
        await utilities.jsclick(this.save_button_xpath)
    }

    get end_date(){
        return $(this.end_date_xpath)

    }
    

}

module.exports = new FieldFxTicketContactRotationPage();