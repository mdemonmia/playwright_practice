const{test,expect}=require('@playwright/test')

test('Handle bootstrap dropdwon',async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click();

    //assertion
    //1. total count
    //    const options= await page.locator('ul>li label input')
    //    await expect(options).toHaveCount(11)

    //2. total count 
        // const options=await page.$$('ul>li label input')
        // console.log('number of count:' ,options.length)
        // await expect(options.length).toBe(11)

    //3. select the dropdown option
        // const options=await page.$$('ul>li label')
        // for(const option of options){
        //     const value=await option.textContent();
        //     console.log('value is:',value)
        //     if(value.includes('Angular') || value.includes('Java')){
        //         await option.click();
        //     }
        // }

     //4. select the dropdown option 
     const options=await page.$$('ul>li label')
     for(const option of options){
        const value=await option.textContent();
        if(value.includes('HTML') || value.includes('CSS')){
            await option.click();
        }
     }

})