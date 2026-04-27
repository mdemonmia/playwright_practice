const{test,expect,chromium}=require('@playwright/test')

test('window handles', async()=>{
    const browser=await chromium.launch();
    const contex=await browser.newContext();

    const page1=await contex.newPage();
    const page2=await contex.newPage();

    const all_pages=await contex.pages();
    console.log("total number of pages:", all_pages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto('https://orangehrm.com/');
    await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses ");

})

test.only('multiple window handles', async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: 'networkidle' });
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagepromise=context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
    const newpage=await pagepromise;
    await newpage.waitForLoadState('domcontentloaded');
    await expect(newpage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses");

    await page1.waitForTimeout(3000);
    await newpage.waitForTimeout(3000);

    await browser.close();
})