//We all used the same nasaSpecs page for our various seperate tests AB
import { nasaSpecs } from "./nasaSpecs"

import { Builder, Capabilities, By, } from "selenium-webdriver"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//page is used to activate functions in the nasaSpecs page AB
const page = new nasaSpecs(driver);

const missions: By = By.xpath("//span[text()='Missions']");
const artemis: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[1]/a");
const artemisnasabutton: By = By.xpath("//*[@src='img/nasa-logo.png']"); //the locator for the nasa logo differs in this mission page for some reason. AB
const commercial: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[2]/a");
const juno: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[6]/a");
const mars: By = By.xpath("//a[text()='Curiosity Mars Rover']");
const hubble: By = By.xpath("//a[text()='Hubble Space Telescope']");
const james: By = By.xpath("//a[text()='James Webb Space Telescope']");
const spaceStation: By = By.xpath("//a[text()='International Space Station']");
const insight: By = By.xpath("//a[text()='InSight Mars Lander']");
const perseverance: By = By.xpath("//*[@id='nasa-main-menu']/li[2]/ul/li[9]/a");
const pluto: By = By.xpath("//a[text()='New Horizons: Pluto and Beyond']");
const osiris: By = By.xpath("//a[text()='OSIRIS-REx Asteroid Mission']");
const parker: By = By.xpath("//a[text()='Parker Solar Probe']");
const launches: By = By.xpath("//a[text()='Launches and Landings']");
const allmissions: By = By.xpath("//a[text()='All Missions A-Z']");
const allmissionsnasabutton: By = By.xpath("//img[@src='/sites/all/themes/custom/nasatwo/images/nasa-logo.svg']");//the locator for the nasa logo differs in this mission page for some reason. AB
const nasalogobutton: By = By.xpath("//*[@alt='NASA logo']")// I made this locator here in case we needed it AB





beforeAll(async () => {
    await driver.get('https://www.nasa.gov/');
});

afterAll(async () => {
    await (await driver).quit()
})
jest.setTimeout(300000)

// Jira test plan located here- https://dmutah.atlassian.net/browse/PT4G4-2  AB
test('Missions Dropdown Menu Test Case', async () => {
    driver.manage().window().maximize();// I used this to maximize the testpage window at the start AB
    await driver.findElement(missions).click();
    await driver.findElement(artemis).click();
    await driver.sleep(1000)
    await driver.findElement(artemisnasabutton).click();
    await driver.findElement(missions).click();
    await driver.findElement(commercial).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(mars).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(hubble).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(james).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(juno).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(spaceStation).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(insight).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(perseverance).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(pluto).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(osiris).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(parker).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(launches).click();
    await driver.sleep(1000)
    await driver.findElement(missions).click();
    await driver.findElement(allmissions).click();
    await driver.sleep(1000)
    await driver.findElement(allmissionsnasabutton).click();
    expect(await page.getResults());

});
