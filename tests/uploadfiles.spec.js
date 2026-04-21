const{test,expect}=require('@playwright/test')

test('handled single upload files',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#singleFileInput').setInputFiles('tests/uploadFiles/Emon_SQA_Intern_CSE_DIU.pdf')
    await page.waitForTimeout(5000)
})

test('multiple upload files', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploadFiles/Emon_SQA_Intern_CSE_DIU.pdf',
                                                                'tests/uploadFiles/nid.pdf'])

    await page.waitForTimeout(5000)

   await page.locator('#multipleFilesInput').setInputFiles([])
 
})