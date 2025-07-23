import { expect, test } from '@playwright/test'
import { cachedDataVersionTag } from 'v8';

test("custom assertion", async ({ page }) => {
    await page.goto("http://127.0.0.1:5501/customassertion.html")
    await page.pause()


    //Ex-1:it will check number is greater than 10
    const textvalue = await page.locator("#d2").textContent();
    const value = parseInt(textvalue || '0');

    await expect(value > 10).toBeTruthy();

    //EX-2 check character length is greater than 5 or not
    // const char:any = await page.locator('#d3').innerText()
    // const charval:any=char.length

    // // await expect(charval>5).toBeTruthy()
    // await expect(charval.length).toBeGreaterThan(5);

    const message=await page.locator('#d3')
    await assertioncharlength(message,5);

})
//reusable
const assertioncharlength=async (locator:any,minlength:number)=>{
    const text=await locator.textContent();
    await expect(text||''.length).toBeGreaterThan(minlength);
}