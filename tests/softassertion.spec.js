const{test,expect}=require('@playwright/test')
test('softassertion_verify',async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    //hard assertion
   /* await expect(page).toHaveTitle('STORE123');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page.locator('#cat')).toBeVisible();

    */
   //soft assertion
   await expect.soft(page).toHaveTitle('STORE123');
   await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
   await expect.soft(page.locator('#cat')).toBeVisible();
})