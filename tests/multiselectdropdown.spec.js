const{test,expect}=require('@playwright/test')

test('Handle multiselect dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.selectOption('#colors',['Red', 'Green', 'Yellow']);

    //assertions
    //1. check total number of option in the dropdown
    //  const options= await page.locator('#colors option')
    //  await expect(options).toHaveCount(7)

     //2. check total number of option in the dropdown
        // const options=await page.$$('#colors option')
        // console.log('number of array dropdown is:',options.length)
        // await expect(options.length).toBe(7)

        //3. presence of option in the dropdown
        const options=await page.locator('#colors')
        let value=await options.textContent();
        await expect(value.includes('Red')).toBeTruthy();





    await page.waitForTimeout(5000);
})