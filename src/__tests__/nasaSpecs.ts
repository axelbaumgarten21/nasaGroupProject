import { By, until, WebDriver } from "selenium-webdriver";
// const foto = require('foto');

export class nasaSpecs {
  static getSuccess(): any {
    throw new Error("Method not implemented.");
  }
    driver: WebDriver;
    url: string = "https://www.nasa.gov/";    

//TB-added searchbar and searchresults locator
homepage: By = By.xpath("//*[@class='html front not-logged-in page-indexhtml show-topics-menu ember-application']");
successP: By = By.xpath('//*[@id="content"]/div'); //("static-landing-page");
searchBar: By = By.xpath('//*[@name="query"]');
searchresults: By = By.xpath("//*[@id='best-bet-1']")
pdf: By = By.xpath('//*[@id="ember20"]/div[1]/p[5]/a[2]');


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
async getText(elementBy: By) {
  await this.driver.wait(until.elementLocated(elementBy));
  return (await this.driver.findElement(elementBy)).getText();
}
async sendKeys(elementBy: By, keys) {
  await this.driver.wait(until.elementLocated(elementBy));
  return this.driver.findElement(elementBy).sendKeys(keys);
}
        async getResults() {
    return this.getText(this.homepage);
  }
//TB-added getsearchresults function
async getsearchresults() {
  return this.getText(this.searchresults)
}
async getSuccess() {
  return this.getText(this.successP);
}

async getPdf() {
  return this.getText(this.pdf);
}

//TB-adding a doSearch function
async doSearch (searchTerm) {
  let search = await this.driver.findElement(this.searchBar)
  await this.sendKeys(this.searchBar, `${searchTerm}\n`)
  let myText = await this.driver.findElement(this.searchresults).getText();
  await this.getsearchresults();
  expect(myText).toContain(`${searchTerm}`);
  }
      // async takeScreenshot(filepath: string) {
    //   foto.writeFile(
    //     `${filepath}.png`,
    //     await this.driver.takeScreenshot(),
    //     "base64",
    //     (e) => {
    //       if (e) console.log(e);
    //       else console.log("screenshot saved successfully");
    //     }
    //   );
    // }
}
