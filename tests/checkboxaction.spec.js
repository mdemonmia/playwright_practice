const{test,expect}=require('@playwright/test')
test('checkbox action handle',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
     const male_checkbox=await page.locator("//input[@id='male']");;
     await male_checkbox.check();
     await expect(male_checkbox).toBeChecked();
     await expect(male_checkbox.isChecked()).toBeTruthy();

     await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

     await page.waitForTimeout(5000);
})