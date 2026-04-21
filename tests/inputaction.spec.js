const{test,expect}=require('@playwright/test');
test('handling_inputaction',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const name=await page.locator("//input[@id='name']");
    await expect(name).toBeVisible();
    await expect(name).toBeEmpty();
    await expect(name).toBeEditable();
    await expect(name).toBeEnabled();

    await page.fill("//input[@id='name']",'John');

    await page.waitForTimeout(5000);

    const email=await page.locator("//input[@id='email']");
    await expect(email).toBeVisible();
    await expect(email).toBeEmpty();
    await expect(email).toBeEnabled();
    await expect(email).toBeEditable();

    await page.fill("//input[@id='email']",'john@gmail.com');

    await page.waitForTimeout(5000);

    const phone=await page.locator("//input[@id='phone']");
    await expect(phone).toBeVisible();
    await expect(phone).toBeEmpty();
    await expect(phone).toBeEnabled();
    await expect(phone).toBeEditable();

    await page.fill("//input[@id='phone']",'01796795458');

    await page.waitForTimeout(5000);

    const address=await page.locator("//textarea[@id='textarea']");
    await expect(address).toBeVisible();
    await expect(address).toBeEmpty();
    await expect(address).toBeEditable();
    await expect(address).toBeEnabled();

    await page.fill("//textarea[@id='textarea']",'Dhaka');
    await page.waitForTimeout(5000);
})