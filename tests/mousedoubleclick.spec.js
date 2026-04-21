const{test,expect}=require('@playwright/test')
test('mouse double click action',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const copytext=await page.locator("//button[normalize-space()='Copy Text']")
    await copytext.dblclick()
    const f2=await page.locator("//input[@id='field2']")
    await expect(f2).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)
})