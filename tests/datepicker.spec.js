const{test,expect}=require('@playwright/test')

// /*test('handle date picker',async({page})=>{
//    await page.goto('https://testautomationpractice.blogspot.com/')
//    //await page.fill('#datepicker','04/05/2025')

//    await page.locator('#datepicker').click()
//    const year="2025"
//    const month="February"
//    const date="10"

//    while(true){
//         const current_year=await page.locator('.ui-datepicker-year').textContent()
//         const current_month=await page.locator('.ui-datepicker-month').textContent()
//         if(current_year==year && current_month==month){
//             break;
//         }
//         await page.click("[title='Prev']")
//    }

//    const dates=await page.$$("//a[@class='ui-state-default']")
//    for(const dt of dates){
//         if(await dt.textContent()==date){
//             await dt.click()
//             break
//         }
//    }

//     await page.waitForTimeout(5000)
// })
// */

// test('handle date picker2', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/')

//     await page.click('#txtDate')

//     const year = "2027"
//     const month = "Aug"   // short form ঠিক আছে এখানে
//     const date = "15"

//     // ✅ select year
//     await page.locator('.ui-datepicker-year').selectOption(year)

//     // ✅ select month
//     await page.locator('.ui-datepicker-month').selectOption({ label: month })

//     // ✅ select date (only current calendar)
//     const calendar = page.locator('.ui-datepicker-calendar')

//     const dates = calendar.locator('a.ui-state-default')

//     for (const dt of await dates.all()) {
//         if ((await dt.textContent()).trim() === date) {
//             await dt.click()
//             break
//         }
//     }

//     await page.waitForTimeout(3000)
// })

test('select to date',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const fromdate=await page.locator('input[placeholder="Start Date"]')
    await fromdate.nth(0).fill('2026-01-01')

    const todate=await page.locator('input[placeholder="End Date"]')
    await todate.nth(0).fill('2026-04-12')

    await page.waitForTimeout(5000)
})