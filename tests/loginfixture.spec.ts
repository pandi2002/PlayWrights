import {test} from './loginfixture';
import{expect} from '@playwright/test'
 
// test("Souce Test",async({soucedemo})=>{
//     await expect(soucedemo).toContain("Products");
   
// })
test("Souce Test",async({soucedemo})=>{
    await expect(soucedemo.locator('.product_label')).toHaveText("Products");
   
})