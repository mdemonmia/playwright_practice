const{test,expect}=require('@playwright/test')

test('Handle web table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table=await page.locator('#productTable')

    //select row and columns
    const column=await table.locator('thead tr th')
    console.log('number of column:',await column.count())
    expect(await column.count()).toBe(4)

    const rows=await table.locator('tbody tr')
    console.log('number of rows:',await rows.count())
    expect(await rows.count()).toBe(5)

    //select checkbox for product 4
    /*const matchedRow=await rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchedRow.locator('input').check()
    */

    //multiple select checkbox for multiple product using function

    // await selectProduct(rows, page, 'Smartphone')
    // await selectProduct(rows, page, 'Tablet')
    // await selectProduct(rows, page, 'Wireless Earbuds')

    //print all the product details using loops
    /*for(let i=0;i<await rows.count();i++){
        const row=await rows.nth(i)
        const tds=await row.locator('td')
        for(let j=0;j<await tds.count()-1;j++){
            const td_text=await tds.nth(j).textContent()
            console.log(td_text)
        }
    }
    */


    //read all the data from the pages in the table
    const pages=await page.locator('.pagination li a')
    const count=await pages.count()
    console.log('number of pages is:',count)

    for(let p=0;p<await pages.count();p++){
        if(p>0){
            await pages.nth(p).click()
        }

        for(let i=0;i<await rows.count();i++){
            const row=await rows.nth(i)
            const tds=await row.locator('td')
            for(let j=0;j<await tds.count()-1;j++){
               const td_text= await tds.nth(j).textContent()
               console.log(td_text)
            }
        }
        await page.waitForTimeout(3000)
    }

    await page.waitForTimeout(5000)
})

async function selectProduct(rows, page, name){

   const matchedRow= await rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()
}