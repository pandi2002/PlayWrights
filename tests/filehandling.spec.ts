import { test } from '@playwright/test'

test("file handling", async ({ page }) => {
    await page.goto("http://127.0.0.1:5501/customassertion.html")
    await page.pause()
    
    const filepath:string="tests/gitcheatsheet.pdf"
    await page.setInputFiles("input[type='file']",filepath)
    await page.locator('button[type="submit"]').click();


    //test case for downloading file
    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.click('a#d4')

    ])

    const downloadpath=await download.path();
    console.log("Downloading file path:",downloadpath)



})