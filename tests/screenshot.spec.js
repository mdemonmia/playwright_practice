const{test,expect}=require('@playwright/test')  
test('single page screenshot',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'homepage.png'})
})

test('full page screenshot',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'fullpage.png', fullpage:'true'})
})

test('element page screenshot',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Emon')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
    await page.locator("//*[@id='logInModal']/div").screenshot({path: 'tests/screenshots/'+Date.now()+'element.png'})
})