import { nasaSpecs } from "./nasaSpecs"
const ns = new nasaSpecs();

import { Builder, Capabilities, By, ThenableWebDriver, } from "selenium-webdriver"
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const page = new nasaSpecs(driver);

const homeButton: By = By.xpath("//*[@id='navbar-nasa']/div[1]/a/img");//Nasa logo.
const artemishome: By = By.xpath("//*[@src='img/nasa-logo.png']"); //the locator differs in each mission page for some reason. AB
const junohome: By = By.xpath("//*[@id='navbar-nasa']/div[1]/a/img"); //the locator differs in each mission page for some reason. AB
const artemis: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[1]/a");
const missions: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/a/span[1]");
const juno: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[6]/a");

jest.setTimeout(15000)

// beforeAll(async () => {

//     await page.navigate();
// });


// afterAll(async () => {
//     await driver.quit();
//   });



//Jira test plan located here- https://dmutah.atlassian.net/browse/PT4G4-2
//Still working on this one below -- AB
test('Missions Dropdown Menu Test Case', async () => {
    await page.navigate();
    await driver.findElement(missions).click();
    await driver.findElement(artemis).click();
    await driver.findElement(artemishome).click();
    await driver.findElement(missions).click();
    await driver.findElement(juno).click();
    await driver.findElement(junohome).click();

    
});

//below is ready for another test case to be added -- AB
// test('', async () => {



// });


