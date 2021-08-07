import { By, until, WebDriver } from "selenium-webdriver";

    export class nasaSpecs {
        driver: WebDriver;
        url: string = "https://www.nasa.gov/";


homepage: By = By.xpath("//*[@class='html front not-logged-in page-indexhtml show-topics-menu ember-application']");


        

constructor(driver: WebDriver) {
  this.driver = driver;
}
async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }
  async getResults() {
    return this.getText(this.homepage);
  }
}