const{test,expect}=require('@playwright/test')
test.skip('Handle hidden dropdown',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("//button[normalize-space()='Login']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
    await page.waitForSelector("//div[@role='listbox']//span")
    const options=await page.$$("//div[@role='listbox']//span")
    for(const option of options){
        const value=await option.textContent();
        if(value.includes('Chief Executive Officer')){
            await option.click();
            break;
        }
    }


    await page.waitForTimeout(5000);
})