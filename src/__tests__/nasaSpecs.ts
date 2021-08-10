import { By, until, WebDriver } from "selenium-webdriver";


    export class nasaSpecs {
        driver: WebDriver;
        url: string = "https://www.nasa.gov/";

//TB-added searchbar and searchresults locator
homepage: By = By.xpath("//*[@class='html front not-logged-in page-indexhtml show-topics-menu ember-application']");
searchBar: By = By.xpath('//*[@name="query"]');
searchresults: By = By.xpath("//*[@id='best-bet-1']")

constructor(driver: WebDriver) {
  this.driver = driver;
}
async navigate() {
  await this.driver.get(this.url);
  await this.driver.wait(until.elementLocated(this.homepage));
  await this.driver.wait(
    until.elementIsVisible(await this.driver.findElement(this.homepage))
  );
}
//TB-added getText function
async getText(elementBy: By) {
  await this.driver.wait(until.elementLocated(elementBy));
  return (await this.driver.findElement(elementBy)).getText();
}

async sendKeys(elementBy: By, keys) {
  await this.driver.wait(until.elementLocated(elementBy));
  return this.driver.findElement(elementBy).sendKeys(keys);
}
//TB-added getsearchresults function
async getsearchresults() {
  return this.getText(this.searchresults)
}

//TB-adding a doSearch function
async doSearch (searchTerm) {
  let search = await this.driver.findElement(this.searchBar)
  await this.sendKeys(this.searchBar, `${searchTerm}\n`)
  let myText = await this.driver.findElement(this.searchresults).getText();
  await this.getsearchresults();
  expect(myText).toContain(`${searchTerm}`);
  }
  }