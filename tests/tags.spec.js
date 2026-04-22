const{test,expect}=require('@playwright/test')
test('test1@smoke',async({page})=>{
    console.log('this is test1')
})

test('test2@smoke',async({page})=>{
    console.log('this is test2')
})

test('test3@sanity',async({page})=>{
    console.log('this is test3')
})

test('test4@sanity',async({page})=>{
    console.log('this is test4')
})

test('test5@smoke@sanity',async({page})=>{
    console.log('this is test5')
})