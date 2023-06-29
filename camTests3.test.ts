import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs");
test("3-404 Page not found Bug", async () => {
    await camTestSolo.navigate();
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.payYourBill);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.learnMore);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.privacyStatement);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.driver.quit();

})