exports.LoginPage=class LoginPage{
    constructor(page){
        this.page=page;
        this.loginLink='#login2'
        this.userName='#loginusername'
        this.Password='#loginpassword'
        this.loginclick="//button[normalize-space()='Log in']"
    }

    async gotoLogin(){
        await this.page.goto("https://demoblaze.com/index.html")
    }

    // async Login(username, password){
    //     await this.page.locator(this.loginLink).click();
    //     await this.page.locator(this.userName).fill(username)
    //     await this.page.locator(this.Password).fill(password)
    //     if(!username || !password){ 
    //         throw new Error("Please fill out Username and Password.")
    //     }
    //     const dialogPromise=this.page.waitForEvent('dialog',{timeout:5000}).catch(() => null);
    //     await this.page.locator(this.loginclick).click();

    //     const dialog=await dialogPromise;
    //     if(dialog){
    //         console.log(dialog.message());
    //         await dialog.accept();
    //     }else{
    //         console.log("Login successfull");
    //     }
        
    // }

    async Login(username,password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.Password).fill(password)
        await this.page.locator(this.loginclick).click();
    }
}