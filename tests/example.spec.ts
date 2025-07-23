import { test, expect } from '@playwright/test';


//Addition Testing
test("Check addition of two number",async({page})=>{
  await page.goto('http://127.0.0.1:5500/JS/cal.html');
  await page.fill('#txt1','5')
  await page.fill('#txt2','5')
  await page.click('#btnadd')

  const result = await page.textContent('#res');
   await expect(result?.trim()).toBe('10');
});
//Subtraction Testing
test("Check subtraction of two number",async({page})=>{
  await page.goto('http://127.0.0.1:5500/JS/cal.html');
  await page.fill('#txt1','8')
  await page.fill('#txt2','3')
  await page.click('#btnsub')

  const result = await page.textContent('#res');
   await expect(result?.trim()).toBe('5');
});
//Multiply Testing
test("Check multiply of two number",async({page})=>{
  await page.goto('http://127.0.0.1:5500/JS/cal.html');
  await page.fill('#txt1','2')
  await page.fill('#txt2','2')
  await page.click('#btnmul')

  const result = await page.textContent('#res');
   await expect(result?.trim()).toBe('4');
});

//Divide Testing
test("Check divide of two number",async({page})=>{
  await page.goto('http://127.0.0.1:5500/JS/cal.html');
  await page.fill('#txt1','8')
  await page.fill('#txt2','4')
  await page.click('#btndiv')

  const result = await page.textContent('#res');
   await expect(result?.trim()).toBe('2');
});



// test('have title',async ({page})=>{
//   await page.goto('https://www.ctscorp.com/');

//   await expect(page).toHaveTitle(/Home/);
// })

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
