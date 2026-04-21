const{test,expect}=require('@playwright/test')

test('Handle inner frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //find parent frames

    const parent_frame=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   //await parent_frame.fill("input[name='mytext3']", 'welcome')

   const child_frame=parent_frame.childFrames()
   console.log('number of child_frame is:',child_frame.length)
   await child_frame[0].locator("//*[@id='i6']/div[3]/div").check()


    await page.waitForTimeout(5000)


})