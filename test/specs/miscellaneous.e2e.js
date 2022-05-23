const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const FieldFxTicketHomePage = require('../pageobjects/fieldfxticketinghome.page');
const FieldFxTicketContactRotationsPage = require('../pageobjects/fieldfxticketing_contact_rotations.page');
const FieldFxTicketContactRotationPage = require('../pageobjects/fieldfxticketing_contact_rotation.page');
const utilities = require('../../utilities/util');
const globalconfig = require('../../globalconfig');


describe('miscellaneous', async () => {
    it('edit contact rotation', async() => {

        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(globalconfig.username, globalconfig.password);
        await HomePage.select_fieldfxticketing_app();
        await FieldFxTicketHomePage.click_contact_rotations_tab();
        await FieldFxTicketContactRotationsPage.create_new_contact_rotation(
            contact='smoketest_member', 
            rotation='smoktest_rotation', 
            start_date=utilities.today_date, 
            end_date=utilities.date_month_from_now)
        await FieldFxTicketContactRotationPage.edit_contact_rotations(utilities.date_two_month_from_now)
        await expect(await FieldFxTicketContactRotationPage.end_date).toHaveText(utilities.date_two_month_from_now)
        
    });
});

