import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs");


test("1-find a hospital", async () => {
    await camTestSolo.navigate();
    await camTestSolo.click(camTestSolo.headerText);
    await camTestSolo.click(camTestSolo.findLocation);
    await camTestSolo.click(camTestSolo.searchBar);
    await camTestSolo.sendKeys(camTestSolo.searchBar, "hospital");
    await camTestSolo.click(camTestSolo.searchBtn);
    await camTestSolo.click(camTestSolo.locationType);
    await camTestSolo.click(camTestSolo.optionCovid19);
    await camTestSolo.click(camTestSolo.searchRefine);
    await camTestSolo.click(camTestSolo.getDirection);

    // fs.writeFile(`${__dirname}/findLocation.png`,
    //  await camTestSolo.driver.takeScreenshot(), "base64",
    //(e) => {
    //  if (e) console.log(e);
    //  else console.log("picture saved")

})

test("2-find a doctor", async () => {
    await camTestSolo.navigate();
    await camTestSolo.click(camTestSolo.findDoctor);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.speciality);
    await camTestSolo.click(camTestSolo.acupuncturist);
    await camTestSolo.click(camTestSolo.vascularSurgery);
    await camTestSolo.click(camTestSolo.findDoctorSearchBtnOverLap);
    await camTestSolo.click(camTestSolo.findDoctorSearchBtn)
    await camTestSolo.click(camTestSolo.highestRated);
})


test("3-404 Page not found Bug", async () => {
    await camTestSolo.navigate();
    await camTestSolo.click(camTestSolo.payYourBill);
    await camTestSolo.click(camTestSolo.learnMore);
    await camTestSolo.click(camTestSolo.privacyStatement);
    await camTestSolo.driver.quit();
})

test("4-Intermountain Nevada, find a doctor", async () => {
    await camTestSolo.navigate();
    await camTestSolo.driver.manage().window().maximize()
    await camTestSolo.click(camTestSolo.intermountainNevada);
    await camTestSolo.switchTabsGen();
    await camTestSolo.driver.sleep(5000);

})

test("5-searching for cannabis at Utah Dept of Health", async () => {
    await camTestSolo.navigate();
    await camTestSolo.driver.manage().window().maximize();
    await camTestSolo.click(camTestSolo.forPatients);
    await camTestSolo.click(camTestSolo.medicalCannabis);
    await camTestSolo.click(camTestSolo.utahDeptHealth);
    await camTestSolo.click(camTestSolo.searchBarUtahDept);
    await camTestSolo.sendKeys(camTestSolo.searchBarUtahDept, "cannabis\n");

})

test("6-saltzer carousel slide functionality", async () => {
    await camTestSolo.navigate();
    await camTestSolo.driver.manage().window().maximize()
    await camTestSolo.click(camTestSolo.saltzerHealth);
    await camTestSolo.switchTabsSaltzer();
    await camTestSolo.driver.sleep(5000);

    //await camTestSolo.click(camTestSolo.slideBtn)
    //await camTestSolo.driver.sleep(3000);
    //await camTestSolo.repeatClick(5, camTestSolo.slideBtn)
    //await camTestSolo.click(camTestSolo.urgentCare)

})

await camTestSolo.driver.quit()




