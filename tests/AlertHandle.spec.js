const{test,expect}=require('@playwright/test')

test.skip('Simple alert handle',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click("//button[@id='alertBtn']")

    await page.waitForTimeout(5000)
})

test.skip('confirm alert handle',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
        //await dialog.dismiss();
    })
    await page.click("//button[@id='confirmBtn']")
    const msg=await page.locator("//p[@id='demo']")
    expect(msg).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)
})

test('handle prompt alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Emon')
        //await dialog.dismiss()
    })

    await page.click("//button[@id='promptBtn']")
    const prompt_msg=await page.locator("//p[@id='demo']")
    await expect(prompt_msg).toHaveText('Hello Emon! How are you today?')
    //await expect(prompt_msg).toHaveText('User cancelled the prompt.')

})
