const{test,expect}=require('@playwright/test')
test('mouse right click action',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    const button=await page.locator("//button[@id='rightClickBtn']")
    await button.click({button:'right'})
    await page.waitForTimeout(5000)
})