const{test,expect}=require('@playwright/test');

test('assertion_verify', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logo=await page.locator('.header-logo');
    await expect(logo).toBeVisible();

    const search= await page.locator('#small-searchterms');
    await expect(search).toBeEnabled();

    const checkbox= await page.locator('#gender-male');
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    const newletter = await page.locator("//input[@id='NewsLetterSubscriptions_0__IsActive']");
    await expect(newletter).toBeChecked();

    const registerbtn= await page.locator('#register-button');
    await expect(registerbtn).toHaveAttribute('type','submit');

    const textName= await page.locator('.page-title h1');
    await expect(textName).toHaveText('Register');

    await expect(textName).toContainText('Reg');

    const inputbox= await page.locator('#Email');
    await inputbox.fill('demo@test')
    await expect(inputbox).toHaveValue('demo@test');
    
    const currency= await page.locator("//select[@id='customerCurrency']/option");
    await expect(currency).toHaveCount(2);

})