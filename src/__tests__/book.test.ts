import { nasaSpecs } from "./nasaSpecs"

import { Builder, Capabilities, By, ThenableWebDriver, until, } from "selenium-webdriver"

const chromedriver = require('chromedriver')

/*

this test will be checking if possible to download book in pdf file

*/



const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const nasaPage = new nasaSpecs(driver);

const download: By = By.xpath('//*[@id="nasa-main-menu"]/li[6]/a/span[1]');
const ebook: By = By.xpath('//*[@id="nasa-main-menu"]/li[6]/ul/li[3]/a');
const hubble: By = By.id('ember180');
const pdf: By = By.xpath('//*[@id="ember20"]/div[1]/p[5]/a[2]');


//so here everytime page will be opened and closed in the end
beforeAll(async () => {
    await driver.get('https://www.nasa.gov/');
  });
  
  afterAll(async () => {
      await driver.quit();
    });
  
    jest.setTimeout(25000)

//actual testgit
test('Missions Dropdown Menu Test Case', async () => {
    driver.manage().window().maximize();
    await driver.findElement(download).click();
    await driver.findElement(ebook).click();
    await driver.sleep(1000);
    await driver.findElement(hubble).click();
    await driver.sleep(1000);
    await driver.findElement(pdf).click();
    expect (await nasaPage.getPdf());



})

// test("Screen for emplloyee", async () => {
//     await nasaPage.('Screenshot');
//     await nasaPage.takeScreenshot('screenshot/screenshot');
//   });
