const{test,expect}=require('@playwright/test');

//handle single checkbox
/*
test('handle single or multiple checkboxes',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const checkbox= await page.locator("//input[@id='sunday' and @type='checkbox']");
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await expect(checkbox.isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@id='tuesday' and @type='checkbox']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})
*/
//handle multiple checkbox

test('Handle multiple checkbox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const checkboxes=[
                      "//input[@id='monday' and @type='checkbox']",
                      "//input[@id='wednesday' and @type='checkbox']",
                      "//input[@id='friday' and @type='checkbox']"
                      ];
    for(const checklocator of checkboxes){
        const checkbox=await page.locator(checklocator);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        await expect(checkbox.isChecked()).toBeTruthy();
    };

    // await page.waitForTimeout(5000);

    for(const checklocatorunselect of checkboxes){
        const unchecklocator=await page.locator(checklocatorunselect);
        if(await unchecklocator.isChecked()){
            await unchecklocator.uncheck();
            await expect(await unchecklocator).not.toBeChecked();
            await expect(await unchecklocator.isChecked()).toBeFalsy();
        }
    }
    await page.waitForTimeout(5000);
})