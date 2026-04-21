const {test,expect}=require('@playwright/test')

test('Handle autosuggestion dropdown', async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#srcinput').fill('Delhi')
    await page.waitForSelector("//*[contains(text(),'Delhi')]")
    const options=await page.$$("//*[contains(text(),'Delhi')]")
    for(let option of options){
        const value=await option.textContent()
        if(value.includes('Delhi')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000)

})