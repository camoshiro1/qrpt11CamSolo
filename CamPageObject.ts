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
    findDoctorSearchBtnOverLap: By = By.xpath('//div[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]')
    findDoctorSearchBtn: By = By.xpath('//button[@class="search-bar__search-button mat-flat-button mat-button-base mat-primary"]')
    highestRated: By = By.xpath('(//div[@class="mat-button-toggle-label-content"])[3]')
    //test3 = pay your bill/ learn more/  privacy statement 404 error
    payYourBill: By = By.xpath('(//a[@class="link link--navbar link--links"])[6]')
    learnMore: By = By.id("contentpanel_1_StandardDirectory_rptDirectory_DirectoryUnit_1_sLinkLabel_1")
    privacyStatement: By = By.xpath('//a[text() = "Privacy Statement"]')
    //test4 = intermountain nevada/senior.house call/scroll down to find a provider/ load more providers
    intermountainNevada: By = By.xpath('(//span[@class="nav-global__action-value"])[3]')
    Seniors: By = By.xpath('(//div[@class="image-background rocket-lazyload entered lazyloaded"])[3]')
    myGenerationClinics: By = By.xpath('(//a[@class="btn btn-primary btn-round my-2 btn-xs"])[3]')
    houseCalls: By = By.xpath('(//div[@class="bg-primary text-white boxedlink aslink"])[3]')
    findProvider: By = By.xpath('//a[text() = "Find a Provider"]')
    nevadaSpeciality: By = By.xpath('(//span[@class="select2-selection select2-selection--single"])[1]')
    vascularSurgery2: By = By.xpath('//li[text() = "Vascular Surgery"]')
    findProvider2: By = By.xpath('//button[@class="btn btn-primary btn-round"]')
    //test5 = for patient/ medical cannabis/ utah department of health/searchbar/ cannabis
    forPatients: By = By.xpath('(//a[@class="link link--navbar link--links"])[5]')
    medicalCannabis: By = By.id("contentpanel_1_StandardDirectory_rptDirectory_DirectoryUnit_0_linkTitle_0")
    utahDeptHealth: By = By.id("rightrailcontentpanel_0_DetailedCallToAction_rptDetailedCallToActionItems_sActionCtaText_0")
    searchBarUtahDept: By = By.id("s")
    //test6 = saltzer Health/ click carousel slide 6x/ click last slide
    saltzerHealth: By = By.xpath('(//a[@class="nav-global__action"])[2]')
    slideBtn: By = By.xpath('//a[@class="bx-next"]')
    //('//div[@class="bx-controls-direction"]')
    urgentCare: By = By.xpath('(//img[@class="ResponsiveImage TestimonialImage"])[13]')










    constructor() {
        super({ url: "https://intermountainhealthcare.org" })
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
    async switchTabsGen() {
        let currentTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(currentTabs[1]);
        await this.driver.sleep(3000);
        //await this.click(this.intermountainNevada);
        await this.scrollIntoView(this.myGenerationClinics);
        await this.clickWithJavaScript(this.Seniors);
        await this.clickWithJavaScript(this.myGenerationClinics);
        //await this.click(this.Seniors);
        await this.driver.sleep(5000);
        //await this.click(this.myGenerationClinics);
        //await this.driver.sleep(3000);
        await this.click(this.houseCalls);
        await this.driver.sleep(5000);
        await this.click(this.findProvider);
        await this.driver.sleep(5000);
        await this.click(this.nevadaSpeciality);
        await this.driver.sleep(5000);
        await this.click(this.vascularSurgery2);
        await this.click(this.findProvider2);
        //await this.driver.switchTo().window(currentTabs[0])
    }

    async switchTabsSaltzer() {
        let currentTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(currentTabs[1]);
        await this.driver.sleep(3000);
        await this.repeatClick(5, this.slideBtn)
        await this.click(this.urgentCare)

    }
    async scrollDown() {
        await this.driver.executeScript("windows.scrollTo(0,document.body.scrollHeight)");
        await this.driver.sleep(1000);
    }
    async repeatClick(num, elementBy) {
        for (let i = 0; i < num; i++) {
            await this.click(elementBy)
        }
    }

}
