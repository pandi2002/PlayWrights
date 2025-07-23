import { test } from '@playwright/test'
import { LoginPage } from './page/LoginPage'
import {users} from './page/credentials'


test("login with valid credentials", async ({ page }) => {
   
    for (let user of users) {
        const loginobj = new LoginPage({ page });
        await loginobj.goto();
        await loginobj.login(user.username, user.password);
    }


    // await page.goto("https://www.saucedemo.com/v1/")
    // await page.locator('#user-name').fill('standard_user');
    // await page.locator('#password').fill('secret_sauce');
    // await page.locator('.btn_action').click();
    // await page.pause();
})

