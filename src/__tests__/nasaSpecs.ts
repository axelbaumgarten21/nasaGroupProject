import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver,
  WebElement,
} from "selenium-webdriver";
import { elementLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");
    export class nasaSpecs {
        driver: WebDriver;
        url: string = "https://www.nasa.gov/";


home: By = By.xpath("//*[@id='navbar-nasa']");
// missions: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/a/span[1]");
// artemis: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[1]/a");
//I don't think we need these since I listed them as a const - might just use this class area for the subsribe to nasa test. AB
homepage: string = "https://www.nasa.gov/"
        

constructor(driver?: WebDriver) {
  if (driver) this.driver = driver;
  else
    this.driver = new Builder()
      .withCapabilities(Capabilities.chrome())
      .build();
}
async navigate() {
  await this.driver.get(this.url);
  await this.driver.wait(until.elementLocated(this.home));
  await this.driver.wait(
    until.elementIsVisible(await this.driver.findElement(this.home))
  );
}

async sendKeys(elementBy: By, keys) {
  await this.driver.wait(until.elementLocated(elementBy));
  return this.driver.findElement(elementBy).sendKeys(keys);
}
}