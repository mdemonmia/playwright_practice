const{test,expect}=require('@playwright/test')
test('handle static web table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table=await page.locator("[name='BookTable']")

    //select row and column
    const column=await table.locator('tbody tr th')
    console.log('number of columns are:',await column.count())
    await expect(await column.count()).toBe(4)

    const rows=await table.locator('tbody tr')
    console.log('number of rows are:',await rows.count())
    await expect(await rows.count()).toBe(7)

    //select specific row
    /*
    const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText: 'Master In Selenium'
    })
    const log=await matchedRow.textContent()
    console.log(log)
    */
   //dynamic select specific row

//    await SelectBook(rows, page, 'Learn Java')
//    await SelectBook(rows, page, 'Master In Selenium')

   //read all the data from the table
   for(let i=0;i<await rows.count();i++){
    const row=await rows.nth(i)
    const tds=await row.locator('td')
    for(let j=0;j<await tds.count();j++){
        const td_text=await tds.nth(j).textContent()
        console.log(td_text)
    }
   }

    await page.waitForTimeout(5000)
})

async function SelectBook(rows, page, name) {
    const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    const log=await matchedRow.textContent()
    console.log(log)
    
}