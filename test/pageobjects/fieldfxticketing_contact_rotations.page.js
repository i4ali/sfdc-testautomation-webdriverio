const Page = require('./page');
const EC = require('wdio-wait-for');
const utilities = require('../../utilities/util');
const sessiondata = require('../../utilities/sessiondata');
const sf = require('../../utilities/salesforceapi')

class FieldFxTicketContactRotationsPage extends Page {

    new_button_xpath = "//div[@title='New']"
    contact_dropdown_xpath = "//label[text()='Contact']/following-sibling::div//input[contains(@placeholder,'Search Contacts')]"
    contact_dropdown_list_xpath = "//label[text()='Contact']/following-sibling::div//input[contains(@placeholder,'Search Contacts')]/parent::div/following-sibling::div//ul"
    rotation_dropdown_xpath = "//label[text()='Rotation']/following-sibling::div//input[contains(@placeholder,'Search Rotations')]"
    rotation_dropdown_list_xpath = "//label[text()='Rotation']/following-sibling::div//input[contains(@placeholder,'Search Rotations')]/parent::div/following-sibling::div//ul"
    start_date_input_xpath = "//input[@name='FX5__Start_Date__c']"
    end_date_input_xpath = "//input[@name='FX5__End_Date__c']"
    save_button_xpath = "//button[text()='Save']"


    async _select_contact(contact){
        // await $(this.contact_dropdown_xpath).setValue(contact)
        await utilities.custom_setvalue(this.contact_dropdown_xpath, contact)
        const unorder_list_ele = await $(this.contact_dropdown_list_xpath)
        const list_eles = await unorder_list_ele.$$(".//li")
        list_eles.forEach(async(elem) => {
            let text = await elem.getText();
            if (text.includes(contact)) {
                let found_ele = await elem.$(".//lightning-base-combobox-formatted-text[@title='?']".replace("?", contact))
                await utilities.jsclick_given_element(found_ele)
            };
        });
    }

    async _rotation_list_expanded() {
        const elem = await $(this.rotation_dropdown_xpath)
        return await elem.getAttribute('aria-expanded') == "true"
    }

    async _select_rotation(rotation){
        // await $(this.rotation_dropdown_xpath).setValue(rotation)
        await utilities.custom_setvalue(this.rotation_dropdown_xpath, rotation)
        // await browser.waitUntil(async ()=> await this._rotation_list_expanded())
        const unorder_list_ele = await $(this.rotation_dropdown_list_xpath)
        const list_eles = await unorder_list_ele.$$(".//li")
        list_eles.forEach(async(elem) => {
            let text = await elem.getText();
            if (text.includes(rotation)) {
                let found_ele = await elem.$("//lightning-base-combobox-formatted-text[@title='?']".replace("?", rotation))
                await utilities.jsclick_given_element(found_ele)

            }
        });
    }

    async create_new_contact_rotation(contact, rotation, start_date, end_date){
        await utilities.jsclick(this.new_button_xpath)
        await utilities.jsclick(this.new_button_xpath)
        await this._select_contact(contact)
        await this._select_rotation(rotation)
        await utilities.custom_setvalue(this.start_date_input_xpath, start_date)
        await utilities.custom_setvalue(this.end_date_input_xpath, end_date)
        await utilities.jsclick(this.save_button_xpath)
        let cid = await sf.get_current_record_id()
        sessiondata.store_record('FX5__Contact_Rotation2__c', cid)
    }


}

module.exports = new FieldFxTicketContactRotationsPage();