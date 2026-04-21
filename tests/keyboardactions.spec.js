const{test,expect}=require('@playwright/test')

test('handle keyboard actions',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator('[name= "text1"]').fill('Welcome to playwright automation.')
    await page.type('[name= "text1"]','Welcome to playwright automation.')

    //control+A
    await page.keyboard.press('Control+A')

    //control+c
    await page.keyboard.press('Control+C')

    //TAB
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //control+V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)
})