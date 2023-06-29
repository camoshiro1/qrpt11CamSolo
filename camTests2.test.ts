
import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs"); test("2-find a doctor", async () => {

    await camTestSolo.navigate();
    await camTestSolo.click(camTestSolo.findDoctor);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.speciality);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.acupuncturist);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.vascularSurgery);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.findDoctorSearchBtnOverLap);
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.findDoctorSearchBtn)
    await camTestSolo.driver.sleep(2000);
    await camTestSolo.click(camTestSolo.highestRated);
})