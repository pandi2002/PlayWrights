import { Browser, BrowserContext, chromium, test as souce } from '@playwright/test'

type myFixture = {
    soucedemo: any;
}

// export const test = souce.extend<myFixture>({

//     soucedemo: async ({page}, use: any) => {
//         await page.goto('https://www.saucedemo.com/v1/');
//         await page.fill('#user-name', 'standard_user');
//         await page.fill('#password', 'secret_sauce');
//         await page.click('#login-button');
//         const text = await page.textContent('.product_label');

//         await use(text || '');

//     }
// })


export const test = souce.extend<myFixture>({

    soucedemo: async ({ }, use: any) => {
        const browser: Browser = await chromium.launch();
        const context: BrowserContext = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/v1/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        
        await use(page);
        await context.close();

    }
})
