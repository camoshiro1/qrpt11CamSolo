import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs");

test("1-find a hospital", async () => {
    await camTestSolo.navigate();
    //await camTestSolo.driver.manage().window().maximize();
    await camTestSolo.click(camTestSolo.headerText);
    await camTestSolo.click(camTestSolo.findLocation);
    await camTestSolo.click(camTestSolo.searchBar);
    await camTestSolo.sendKeys(camTestSolo.searchBar, "hospital");
    await camTestSolo.click(camTestSolo.searchBtn);
    await camTestSolo.click(camTestSolo.locationType);
    await camTestSolo.click(camTestSolo.optionCovid19);
    await camTestSolo.click(camTestSolo.searchRefine);
    await camTestSolo.click(camTestSolo.getDirection);
    await camTestSolo.driver.quit();
})


