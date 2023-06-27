import { camSoloPage } from "./CamPageObject";

const camTestSolo = new camSoloPage

const fs = require("fs");
/*

test("find a hospital", async () => {
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

    fs.writeFile(`${__dirname}/findLocation.png`,
        await camTestSolo.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.log(e);
            else console.log("picture saved")

        })

    await camTestSolo.driver.quit()

})

*/

test("find a doctor", async () => {
    await camTestSolo.navigate();
    await camTestSolo.click(camTestSolo.findDoctor);
    await camTestSolo.click(camTestSolo.speciality);
    await camTestSolo.click(camTestSolo.acupuncturist);
    await camTestSolo.click(camTestSolo.vascularSurgery);
    await camTestSolo.click(camTestSolo.findDoctorSearchBtn);
    await camTestSolo.click(camTestSolo.highestRated);
})