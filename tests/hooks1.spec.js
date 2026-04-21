const{test,expect}=require('@playwright/test')

test.skip('handle hook1',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')

    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Emon')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    //test home page
    const products=await page.$$('.hrefch')
    await expect(products).toHaveLength(9)

    //logout
    await page.locator('#logout2').click()
})

test('add to cart handle',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')

    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Emon')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    //add to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog',async dialog=>{
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    //logout
    await page.locator('#logout2').click()
})