
import { nasaSpecs } from "./nasaSpecs"

import { Builder, Capabilities, By, ThenableWebDriver, Actions, WebElement, WebDriver, Locator, Condition } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// const page = new nasaSpecs(driver);


const myPage = new nasaSpecs(driver)

afterAll(async () => {
    await (await driver).quit()
})
jest.setTimeout(300000)

test('Search Mars', async () => {
    await myPage.navigate();

    await myPage.doSearch('Mars');

});

test('Search Pluto', async () => {
    await myPage.navigate();

   await myPage.doSearch('Pluto'); 

});

test('Search Astronauts', async () => {
    await myPage.navigate();

    await myPage.doSearch('Astronauts');

});