const Page = require('./page');
const utilities = require('../../utilities/util');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    btnSubmit = '//*[@id="Login"]'
    inputUsername = '//*[@id="username"]'
    inputPassword = '//*[@id="password"]'

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await $(this.inputUsername).setValue(username)
        await $(this.inputPassword).setValue(password)
        // await this.btnSubmit.click()
        await utilities.jsclick(this.btnSubmit)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open()
    }
}

module.exports = new LoginPage();
