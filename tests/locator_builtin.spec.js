const{test,expect}=require('@playwright/test');
test.skip('locators built in', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await expect(page).toHaveTitle('OrangeHRM');
    const pageTitle=await page.title();
    await expect(pageTitle).toBe('OrangeHRM');
   
    const logo=await page.getByAltText('company-branding');
    console.log(logo);
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{type:'submit'}).click();
    const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(name)).toBeVisible();
})