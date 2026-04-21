const{test,expect}=require('@playwright/test')


test('Handle dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //multiple way to select option in dropdown
   // await page.locator('#country').selectOption({label:'Canada'});
   //await page.locator('#country').selectOption('Canada');
   //await page.locator('#country').selectOption({value:'uk'});
   //await page.locator('#country').selectOption({index:4});
   //await page.selectOption('#country','Japan');

   //Assertion
// 1. check total number of option in dropdown
    // const options=await page.locator('#country option');
    // await expect(options).toHaveCount(10);

   // 2. check total number of options in dropdown
    // const options=await page.$$('#country option');
    // console.log('number of options is:',options.length);
    // await expect(options.length).toBe(10)

    //3. presence option in dropdown
    // const content=await page.locator('#country').textContent();
    // await expect(content.includes('France')).toBeTruthy();

    //4. check presence of option in dropdown by using loop
    // const options=await page.$$('#country option')
    // let status=false;
    // for(const option of options){
    //     let value=await option.textContent();
    //     if(value.includes('France')){
    //         status=true;
    //         break;
    //     }
    // }
    // expect(status).toBeTruthy();

   // 5. select options from dropdown by using loop
  const options=await page.$$('#country option')
  for(const option of options){
    const value=await option.textContent();
    if(value.includes('France')){
        await page.selectOption('#country',{label:value.trim()});
        break;
    }
  }

    await page.waitForTimeout(5000);
})