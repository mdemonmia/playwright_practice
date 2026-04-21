const{test,expect}=require('@playwright/test')
test('handle frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame=await page.frames()
    console.log('number of frame: ' ,frame.length)

    //approche 1
    //const frame_name=await page.frame('name') //if available
    // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill("[name='mytext1']",'Hello')

    //approch2

    const framelocator=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await framelocator.fill('Hellow')

    await page.waitForTimeout(5000)

})