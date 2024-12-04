// for inteligencies Also Created file of congig.json for active inteligensis to entire project

import landingPage from "../../pages/landingPage"


describe('Landing Page Functionalities of Automation Exercise Site', function () {
    beforeEach(function () {  // Before method
        cy.fixture('landingPageData').as('data')
        cy.visit("https://www.automationexercise.com/")
    })
    it("Validate Page Title", function () {
        landingPage.titleOfPage(this.data.title)


    })
    it('Landing Page footer', function () {
        landingPage.foterVisible(this.data.footer)
    })

    this.afterEach(function () {
        cy.log("Test is successfully completed..")
    })
})