import {test, expect} from '@playwright/test';
import * as allure from "allure-js-commons";

test('search for issue', async ({page}) => {
  await allure.step("go to github", async () => {
    await page.goto('https://github.com/search?q=&type=repositories');
  })

  await allure.step("search `allure-example`", async () => {
    await page.click('[aria-label="Search GitHub"]');
    await page.fill('[aria-label="Search GitHub"]', "allure-example");
    await page.press('[aria-label="Search GitHub"]', "Enter");

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
