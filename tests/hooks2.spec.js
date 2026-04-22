const{test,expect}=require('@playwright/test')


test.beforeEach(async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Emon')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
})

test.afterEach(async({page})=>{
    await page.locator('#logout2').waitFor({ state: 'visible' });
    await page.locator('#logout2').click()
})

test('test home page',async({page})=>{
    const products=await page.$$('.hrefch')
    expect(products).toHaveLength(9)
})

test('add to cart test',async({page})=>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    
    page.on('dialog',async dialog=>{
        await expect(dialog.type()).toContain('alert')
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    await page.locator("//a[normalize-space()='Add to cart']").click()

})