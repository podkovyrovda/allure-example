import {test, expect} from '@playwright/test';
import * as allure from "allure-js-commons";

test('search for issue', async ({page}) => {
  await allure.step("go to github", async () => {
    await page.goto('https://github.com/');
  })

  await allure.step("search `allure-example`", async () => {
    await page.locator(".js-site-search-type-field").click();
    await page.locator(".js-site-search-type-field").fill("allure-example");
    await page.locator(".js-site-search-type-field").press('Enter');
  })

  await allure.step("go to repository", async () => {
    await page.getByText("eroshenkoam/allure-example").click()
  })

  await allure.step("go to Issues tab", async () => {
    await page.locator("#issues-tab").click()
  })

  await allure.step("check issue number 90", async () => {
    expect(await page.getByText("#90")).toBeDefined()
  })

});
