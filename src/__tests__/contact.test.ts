import { nasaSpecs } from "./nasaSpecs"

import { Builder, Capabilities, By, ThenableWebDriver, until, } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const nasaPage = new nasaSpecs(driver);

const contactNasa: By = By.xpath('//a[text()="Contact NASA"]')
const headq: By = By.xpath('//a[text()="Headquarters"]')
const urname: By = By.name('Sender') 
const uremail: By = By.id('emailaddress')
const subject: By = By.xpath('//*[@id="inquiry_subject"]/option[5]')
const question: By = By.id('question_or_comment')
const submit: By = By.xpath('//*[@id="contact_us_request"]/div[5]/button')
// const successPage: By = By.className("static-landing-page")

beforeAll(async () => {
  await driver.get('https://www.nasa.gov/');
});

afterAll(async () => {
    await driver.quit();
  });

  jest.setTimeout(25000)

    test('Ask question NASA', async () => {
    driver.manage().window().maximize();
    await driver.findElement(contactNasa).click();
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(await driver.findElement(headq)));
    await driver.findElement(headq).click();
    await driver.wait(until.elementIsVisible(await driver.findElement(urname)));
    await driver.findElement(urname).sendKeys("testName");
    await driver.wait(until.elementIsVisible(await driver.findElement(uremail)));
    await driver.findElement(uremail).sendKeys("test@email.com");
    await driver.findElement(subject).click();
    await driver.wait(until.elementIsVisible(await driver.findElement(question)));
    await driver.findElement(question).sendKeys("test question");
    await driver.findElement(submit).click();
    expect (await nasaPage.getSuccess());  //.toContain("Request Submitted Successfully");
    await driver.sleep(3000);
   
    })

