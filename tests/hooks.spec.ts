import { test } from '@playwright/test'
import {describe} from "node:test"

// test.beforeEach("HOOKS", () => {
//     console.log("Good Morning")

// })

// test("HOOKS1", () => {
//     console.log("Hi Abi")

// })


// test.afterEach("HOOKS2", () => {
//     console.log("Have a cup of coffee")

// })


// test("HOOKS3", () => {
//     console.log("Hi Raja")

// })

// test("HOOKS4", () => {
//     console.log("Hi Gokul")

// })
describe("test cases for souce app",()=>{
    test.beforeEach("login test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.pause();
});

test("Home page test", async ({ page }) => {
    // await page.goto("https://www.saucedemo.com/v1/")
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.getByRole('button', { name: 'LOGIN' }).click();

    await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('#item_1_img_link').getByRole('img').click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    // await page.close();
    await page.pause();
});

test("logout test", async ({ page }) => {
    // await page.goto("https://www.saucedemo.com/v1/")
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.getByRole('button', { name: 'LOGIN' }).click();

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    // await page.pause();
    // await page.close();
});





})
