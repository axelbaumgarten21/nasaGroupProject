import { nasaSpecs } from "./nasaSpecs"

import { Builder, Capabilities, By, ThenableWebDriver, until, } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const nasaPage = new nasaSpecs(driver);


//my variables goes here
const follow: By = By.id('follow');
const gmail: By = By.xpath('//*[@id="at-expanded-menu-top-service-list-container"]/li[7]/button/span/svg/g/path[2]')


beforeAll(async () => {
    await driver.get('https://www.nasa.gov/');
  });
  
  afterAll(async () => {
      await driver.quit();
    });
  
    jest.setTimeout(25000)


    test('Missions Dropdown Menu Test Case', async () => {
        driver.manage().window().maximize();
        await driver.findElement(follow).click();
        await driver.sleep(1000);
        await driver.findElement(gmail).click();
    
    
    
    })