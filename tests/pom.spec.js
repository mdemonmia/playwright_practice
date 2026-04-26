import{test,expect}from '@playwright/test'
import{ LoginPage } from '../pages/login'
import{ HomePage } from '../pages/homepage'
import{ CartPage } from '../pages/cart'

// test.describe('login tests', ()=>{
//     test.beforeEach(async({page})=>{
//         const login=new LoginPage(page);
//         await login.gotoLogin();
//     })

//     //test=1 valid test
//     test('valid login',async({page})=>{
//         const login=new LoginPage(page);
//         await login.Login('Emon','test@123')
//     })

//     //test=2 invalid test
//     test('check blank user name',async({page})=>{
//         const login=new LoginPage(page);
//         await expect(login.Login('','test@123'))
//         .rejects.toThrow('Please fill out Username and Password.')
//     })

//     //test=3 invalid test
//     test('blank password check',async({page})=>{
//         const login=new LoginPage(page);
//         await expect(login.Login('Emon','')).rejects.toThrow('Please fill out Username and Password.')
//     })

//     //test=4 invalid test
//     test('username or password both are blank check',async({page})=>{
//         const login=new LoginPage(page);
//         await expect(login.Login('','')).rejects.toThrow('Please fill out Username and Password.')
//     })

//     //test=5 wrong test
//     test('username password wrong',async({page})=>{
//         const login=new LoginPage(page);
//         await login.Login('emon1','123456')
//     })
// })

test('tests', async({page})=>{
    //login
    const login=new LoginPage(page)
    await login.gotoLogin()
    await login.Login('Emon','test@123')
    await page.waitForTimeout(3000)

    //home page

    const homepage=new HomePage(page)
    await homepage.addtocart('Iphone 6 32gb')
    await homepage.gotoCart();

    //cart
    const cart=new CartPage(page)
    await page.waitForTimeout(3000)
    const status=await cart.getCart('Iphone 6 32gb')
    expect(await status).toBe(true)

})
   