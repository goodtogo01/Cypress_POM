
import basePage from "../../pages/basePage"
import landingPage from "../../pages/landingPage"
import registerUser from "../../pages/registerUser";
import loginPage from "../../pages/loginPage";

describe("Registration Functionalities", function(){

    
    beforeEach("Invock Fixture", function(){
        cy.fixture("registerUser").as('data')
        cy.visit("https://www.automationexercise.com/")
       
    })
it("Validate Page title", function(){
    registerUser.pageTitle(this.data.pageTitle)
})
    it("Register new user", function(){
        landingPage.loginSource()
        registerUser.userFullName(this.data.name)
        registerUser.userEmail(this.data.newEmail)
        registerUser.clicSignupButton()
        registerUser.genders()
        registerUser.newPass(this.data.passWord)
        registerUser.setDay(5)
        registerUser.setMonths('March')
        registerUser.setYears(1995)
        registerUser.setFirstName(this.data.firstName)
        registerUser.setLastName(this.data.lastName)
        registerUser.setCompanyName(this.data.company)
        registerUser.setAddress(this.data.address)
        registerUser.setCountry(this.data.country)
        registerUser.setStates('NY')
        registerUser.setCity(this.data.city)
        registerUser.setZip(this.data.zip)
        registerUser.setMob(this.data.mobileNo)
        registerUser.clickRegister()
        registerUser.accountCreated(this.data.finalMessage)
        registerUser.clicContinue();
        loginPage.seeUserName(this.data.nameAppear )          
    })
})
