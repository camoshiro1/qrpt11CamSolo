import { By, WebDriver, WebElement, until } from 'selenium-webdriver';
import { BasePage } from './basePage'

export class camSoloPage extends BasePage {
    //test1 = find a hospital/covid vaccine/get direction
    headerText: By = By.xpath('//div[@class ="site-logo__main"]');
    findLocation: By = By.xpath('(//a [@class="link link--navbar link--links"])[1]');
    searchBar: By = By.id("locationnametypeahead");
    searchBtn: By = By.id("btnSearchLocation");
    locationType: By = By.xpath('//select[@name = "LocationType"]');
    optionCovid19: By = By.xpath('//option[@value="covid-19 vaccine"]');
    searchRefine: By = By.id("btnSearchLocation");
    getDirection: By = By.xpath('//div[@class="card-location__actions"]')
    //test2 = find a doctor/filter 2 specialities/ highest rated
    findDoctor: By = By.xpath('(//a[@class="link link--navbar link--links"])[2]')
    speciality: By = By.xpath('(//div[@class="mat-form-field-infix"])[3]')
    acupuncturist: By = By.xpath('//span[text() = " Acupuncturist "]')
    vascularSurgery: By = By.xpath('//span[text() = " Vascular Surgery "]')
    findDoctorSearchBtn: By = By.xpath('//div[@class="search-bar__search-button-wrapper"]')
    highestRated: By = By.xpath('(//div[@class="mat-button-toggle-label-content"])[3]')



    constructor() {
        super({ url: "https://intermountainhealthcare.org" })
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();


    }
}
