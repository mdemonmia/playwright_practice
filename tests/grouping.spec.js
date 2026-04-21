const{test,expect}=require('@playwright/test')

test.beforeAll(async()=>{
    console.log('beforeall function')
})

test.afterAll(async()=>{
    console.log('afterall function')
})

test.beforeEach(async()=>{
    console.log('beforeeach function')
})

test.afterEach(()=>{
    console.log('aftereach function')
})

test.describe('grouping test 1',()=>{
    test('test1',async({page})=>{
    console.log('test1')
    })

    test('test2',async({page})=>{
    console.log('test2')
    })

})

test.describe('grouping test 2',()=>{
    test('test3',async({page})=>{
   console.log('test3')
    })

    test('test4',async({page})=>{
    console.log('test4')
    })
})

