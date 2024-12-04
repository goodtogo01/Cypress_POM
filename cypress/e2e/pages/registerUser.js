///<reference types="Cypress"/>
import BasePage from "./basePage"
import loginPage from "./loginPage";

class RegisterUser extends BasePage {

    // collect locators

    //Step 1: Main Page Actions
    enterName() { return "input[placeholder='Name']" }
    enterEmail() { return "input[data-qa='signup-email']"}
    signUp() {return "button[data-qa='signup-button']" }

        // main page implementations
        userFullName(name) {
            cy.get(this.enterName()).type(name);
          
        }
        userEmail(email) {
            cy.get(this.enterEmail()).type(email);
            
        }
        clicSignupButton() {
            cy.get(this.signUp()).click()
            
        }

    // User details top-part 
    title() {return "#id_gender1" }
    enterPass() {return "#password"}
    genders() {
        //cy.get(this.title()).should('not.be.selected').click({force: true})
        this.selectItems(this.title());
       
    }
    newPass(pas) {
        cy.get(this.enterPass()).clear().type(pas)
       // this.fillText(this.enterPass());
      
    }

    // Step 2: User Details Bottom-part
    firstName() {return "#first_name"}
    lastName() {return "#last_name"}
    companyName() {return "#company"}
    addressOne() {return "#address1"}
    countryName() {return "#country"}
    stateName() {return "#state"}
    cityName() {return "#city"}
    zipCode() {return "#zipcode"}
    mob_no() {return "#mobile_number"}
    finalButton() {return "button[data-qa='create-account']"}
    finalMessage(){return "h2[class='title text-center'] b"}
    contineueButton(){return "Continue"}
 
    // User Implementation
    setFirstName(fName) {
        cy.get(this.firstName()).type(fName)
        
    }
    setLastName(lName) {
        cy.get(this.lastName()).type(lName)
    }
    setCompanyName(com) {
        cy.get(this.companyName()).type(com)
    }
    setAddress(adds) {
        cy.get(this.addressOne()).type(adds)
    }
    setCountry(country) {
        cy.get(this.countryName()).contains(country).click({ force: true })
    }
    setStates(state) {
        cy.get(this.stateName()).type(state)
    }
    setCity(city) {
        cy.get(this.cityName()).type(city)
    }
    setZip(zip) {
        cy.get(this.zipCode()).type(zip)
    }
    setMob(mob) {
        cy.get(this.mob_no()).type(mob)
    }
    clickRegister() {
        cy.get(this.finalButton()).click()
    }
    clicContinue(){
        cy.contains(this.contineueButton()).click();
    }
    accountCreated(message){
        cy.get(this.finalMessage()).contains(message);
    }

    //Step: 3 --  set date of birth
    dates() {return "#days"}
    months() {return "#months"}
    years() {return "#years"}
    // DOB Implementation
    setDay(day) {
        cy.get(this.dates()).contains(day).click({ force: true })
        //this.selectItems(this.dates(), true)
    }
    setMonths(month) {
        cy.get(this.months()).contains(month).click({ force: true })
    }
    setYears(year) {
        cy.get(this.years()).contains(year).click({ force: true })
    }

}
const registerUser = new RegisterUser();
export default registerUser;