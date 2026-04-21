const{test,expect}=require('@playwright/test');

test('locateMultipleElement', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
   /* const links=await page.$$('a');

    for(const link of links){
        const text_links=await link.textContent();
        console.log(text_links);
    } */

        //locate all the product on the display

        //ai code ta product display haoa porjonto wait kore
        await page.waitForSelector("//div[@id='tbodyid']//h4/a");

        const products=await page.$$("//div[@id='tbodyid']//h4/a");
        for(const product of products){
            const productName=await product.textContent();
            console.log(productName);
        }

})