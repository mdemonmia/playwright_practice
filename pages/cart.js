exports.CartPage=class CartPage{
    constructor(page){
        this.page=page;
        this.cartTotal="//tbody[@id='tbodyid']/tr/td[2]"
    }

    async getCart(ProductName){
        const products=await this.page.$$(this.cartTotal)
            for(const product of products){
                if(ProductName==await product.textContent()){
                    return true;
                    break;
                }
            }
    }
}