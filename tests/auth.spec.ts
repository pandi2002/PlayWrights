import { Browser, BrowserContext, chromium, Locator, Page, test } from "@playwright/test";

test("auth test", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: "chrome" })
    const browsercontext_1: BrowserContext = await browser.newContext();
    const page: Page = await browsercontext_1.newPage();
    //below approach is not good idea for authorization
    // await page.goto("http://userid:userpass@quiz-fe.hematitecorp.com/")

    const userid: Locator = await page.locator('#email');
    // await userid.fill('rajapandi.p@changepond.com');

    const userpass: Locator = await page.locator('#password')
    // await userpass.fill('Raju@123');
    



    const Userid: string = "rajapandi.p@changepond.com";
    

    
    const Userpass: string = "Raju@123"
    
    
    const Authheader: string = "Basic " + btoa(Userid + ":" + Userpass);

    console.log(Authheader)

    page.setExtraHTTPHeaders({ Authorization: Authheader })
    await page.goto("http://quiz-fe.hematitecorp.com/");
    await userid.fill("rajapandi.p@changepond.com");
    await userpass.fill('Raju@123');



})