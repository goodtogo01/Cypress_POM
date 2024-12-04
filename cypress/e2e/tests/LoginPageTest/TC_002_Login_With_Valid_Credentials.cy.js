import landingPage from "../../pages/landingPage"
import loginPage from "../../pages/loginPage"

describe('Login Functionalities of Automation Exercise Site', function () {
    beforeEach(function () {  // Before method
        cy.fixture('loginPageData').as('data')
        cy.visit("https://www.automationexercise.com/")
    })
    it("TC_01: Login with valid credentials", function(){
        landingPage.loginSource()
       .enterEmail(this.data.validID)
       .enterPassword(this.data.validPass)
       .clickLogin()
       .seeUserName(this.data.message.loggedUser)
       .clickLogOut();
    })

    
    this.afterEach(function () {
        cy.log("Test is successfully completed..")
    })
})