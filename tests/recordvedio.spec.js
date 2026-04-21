const{test,expect}=require('@playwright/test');
test('record vedio',async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link',{name:'Log in'}).click();
    await page.locator('#loginusername').fill('Emon');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button',{name: 'Log in'}).click();
    await expect(page.getByRole('link',{name:'Log out'})).toBeVisible();

})