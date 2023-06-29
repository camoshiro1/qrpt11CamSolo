import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs");

test("6-saltzer carousel slide functionality", async () => {
    await camTestSolo.navigate();
    await camTestSolo.driver.manage().window().maximize()
    await camTestSolo.click(camTestSolo.saltzerHealth);
    await camTestSolo.switchTabsSaltzer();
    await camTestSolo.driver.sleep(5000);
    await camTestSolo.driver.quit();
})

