exports.HomePage=class HomePage{
    constructor(page){
        this.page=page
        this.allProduct='#tbodyid div h4 a'
        this.addtocartBtn="//a[normalize-space()='Add to cart']"
        this.cart='#cartur'
    }

    async addtocart(productName){
        const products=await this.page.$$(this.allProduct)
        for(const product of products){
            if(productName==await product.textContent()){
                await product.click();
                break;
            }
        }
        this.page.on('dialog',async dialog=>{
            if(await dialog.message().includes('Product added.')){
                await dialog.accept();
            }
        })
        await this.page.waitForSelector(this.addtocartBtn);
        await this.page.locator(this.addtocartBtn).click();
    }

    async gotoCart(){
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.cart).click();
    }

}