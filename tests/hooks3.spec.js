const{test,expect}=require('@playwright/test')

let page;
test.beforeAll(async({browser})=>{
    page=await browser.newPage();
    await page.goto('https://demoblaze.com/index.html')
    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Emon')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
})

test.afterAll(async()=>{
    await page.locator('#logout2').click()
})

test('test home page',async()=>{
    await page.waitForSelector('.hrefch') 
    const products = page.locator('.hrefch')
    await expect(products).toHaveCount(9)
})

test('add to cart test',async()=>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    
    page.on('dialog',async dialog=>{
        await expect(dialog.type()).toContain('alert')
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    await page.locator("//a[normalize-space()='Add to cart']").click()

})