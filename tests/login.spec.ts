import { test, expect, Page, Browser, chromium, Locator } from '@playwright/test';

test("login",async()=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();

    await page.goto('http://quiz-fe.hematitecorp.com/');

    const email:Locator=await page.locator('#email');
    const password:Locator=await page.locator('#password');
    const button:Locator=await page.locator("[type='submit']");

    await email.fill('rajapandi.p@changepond.com');
    await password.fill('Raju@1234');
    await button.click();

    const title=await page.title();
    console.log("Home Page title",title);
    await page.screenshot({path:'Voucher Code.png'});

    expect(title).toEqual("Quiz App");

    // browser.close();
})