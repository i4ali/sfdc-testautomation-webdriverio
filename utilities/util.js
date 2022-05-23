
class Utilities {

    async jsclick(selector){
        const elem = await $(selector)
        await elem.waitForDisplayed({ timeout: 10000 })
        await elem.waitForEnabled({ timeout: 10000 })
        await browser.execute(async(elem) => {
            await elem.focus(); 
            await elem.click();
        }, elem)
        await browser.pause(2000)
    }

    async custom_setvalue(selector, value, conditiontrue = null){
        await $(selector).scrollIntoView()
        await $(selector).setValue(value)
        await browser.pause(2000)
    }

    async jsclick_given_element(elem){
        await elem.waitForDisplayed({ timeout: 10000 })
        await elem.waitForEnabled({ timeout: 10000 })
        await browser.execute(async(elem) => {
            await elem.focus(); 
            await elem.click();
        }, elem)
        await browser.pause(2000)
    }

    get today_date(){
        return new Date().toLocaleDateString()
    }

    get date_month_from_now(){
        const today = new Date()
        const month_today =  today.getMonth()
        const month_next_one = month_today + 1
        today.setMonth(month_next_one)
        return today.toLocaleDateString()
    }

    get date_two_month_from_now(){
        const today = new Date()
        const month_today =  today.getMonth()
        const month_next_one = month_today + 2
        today.setMonth(month_next_one)
        return today.toLocaleDateString()
    }

}

module.exports = new Utilities();