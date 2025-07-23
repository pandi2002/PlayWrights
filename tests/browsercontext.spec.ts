import { Browser, BrowserContext, chromium, expect, Locator, Page, test } from '@playwright/test';

test("Browsercontext", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: "chrome" });

    //browsercontext-1
    const browsercontext_1: BrowserContext = await browser.newContext();
    const page_1: Page = await browsercontext_1.newPage();
    await page_1.goto("http://quiz-fe.hematitecorp.com/")


    const email_1: Locator = await page_1.locator('#email');
    const password_1: Locator = await page_1.locator('#password');
    const button_1: Locator = await page_1.locator("[type='submit']");

    await email_1.fill('rajapandi.p@changepond.com');
    await password_1.fill('Raju@1234');
    await button_1.click();

    const title_1 = await page_1.title();
    console.log("Home Page title", title_1);
    await page_1.screenshot({ path: 'Voucher Code.png' });

    expect(title_1).toEqual("Quiz App");


    //browsercontext-2
    const browsercontext_2: BrowserContext = await browser.newContext();
    const page_2: Page = await browsercontext_2.newPage();
    await page_2.goto("http://quiz-fe.hematitecorp.com/")


    const email_2: Locator = await page_2.locator('#email');
    const password_2: Locator = await page_2.locator('#password');
    const button_2: Locator = await page_2.locator("[type='submit']");

    await email_2.fill('abinesh.ashokan@changepond.com');
    await password_2.fill('Dreamabi@1714');
    await button_2.click();

    const title_2 = await page_2.title();
    console.log("Home Page title", title_2);
    await page_2.screenshot({ path: 'Voucher Code.png' });

    expect(title_2).toEqual("Quiz App");



})