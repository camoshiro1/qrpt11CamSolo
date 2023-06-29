import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs");

test("4-Intermountain Nevada, find a doctor", async () => {
    await camTestSolo.navigate();
    await camTestSolo.driver.manage().window().maximize()
    await camTestSolo.click(camTestSolo.intermountainNevada);
    await camTestSolo.switchTabsGen();
    await camTestSolo.driver.sleep(5000);
    await camTestSolo.driver.quit();

})