const{test,expect}=require('@playwright/test')
test('Handle dynamic web table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table=await page.locator('#taskTable')
    //select rows and columns
   const columns= await table.locator('thead tr th')
   console.log('number of columns are:',await columns.count())
   expect(await columns.count()).toBe(5)

   const rows=await table.locator('tbody tr')
   console.log('number of rows are:',await rows.count())
   expect(await rows.count()).toBe(4)

   //dynamic select data from the row

   await SelectName(rows, page, 'Chrome')
   await SelectName(rows, page, 'Firefox')

   //print all the data from the row in the table
   for(let i=0;i<await rows.count();i++){
        const row=await rows.nth(i)
        const tds=await row.locator('td')
        for(let j=0;j<await tds.count();j++){
            console.log(await tds.nth(j).textContent())
        }
   }

})

async function SelectName(rows, page, name) {
    const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    const log=await matchedRow.textContent()
    console.log(log)

}