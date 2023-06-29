import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs");

test("5-searching for cannabis at Utah Dept of Health", async () => {
    await camTestSolo.navigate();
    await camTestSolo.driver.manage().window().maximize();
    await camTestSolo.click(camTestSolo.forPatients);
    await camTestSolo.click(camTestSolo.medicalCannabis);
    await camTestSolo.click(camTestSolo.utahDeptHealth);
    await camTestSolo.click(camTestSolo.searchBarUtahDept);
    await camTestSolo.sendKeys(camTestSolo.searchBarUtahDept, "cannabis\n");
    await camTestSolo.driver.quit();

})
