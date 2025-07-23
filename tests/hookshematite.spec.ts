import { test } from '@playwright/test'
import { describe } from "node:test"

describe("test cases for quizapp", () => {
    test.beforeEach("quizapp", async ({ page }) => {
        await page.goto("http://quiz-fe.hematitecorp.com/")

        // await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('rajapandi.p@changepond.com');
        // await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Raju@1234');
        // await page.getByRole('button').filter({ hasText: /^$/ }).click();
        await page.getByRole('button', { name: 'Sign In' }).click();


        // await page.pause()
    });

    test("voucher test", async ({ page }) => {

        // await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
        await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('RJ4187');
        await page.getByRole('button', { name: 'submit' }).click();
        // await page.pause()

    })

    test("quizlogout test", async ({ page }) => {

        await page.getByRole('button', { name: 'Logout' }).click();
        await page.getByRole('button', { name: 'Logout' }).click();
    })
});