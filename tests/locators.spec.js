const {test, expect}=require('@playwright/test');

test('verify Login', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.click("//a[@id='login2']");
 
    await page.fill("//input[@id='loginusername']",'Emon');
    await page.fill("//input[@id='loginpassword']",'test@123');
    await page.click("//button[normalize-space()='Log in']");

    const logout=page.locator("//a[normalize-space()='Log out']");
    await expect(logout).toBeVisible();

    await page.close();

})