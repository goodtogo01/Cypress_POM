///<reference types="Cypress"/>
import BasePage from "./basePage"
import landingPage from "./landingPage"
 

class LoginPage extends BasePage{

    getEmail() { return "input[data-qa='login-email']" };
    getPass() {  return "input[placeholder='Password']"};
    clickLoginButton() {return "button[data-qa='login-button']" };
    logedUserName(){return "ul[class='nav navbar-nav'] li a b" }
    clickLogOutButton(){return " Logout"};
    invalidLogin(){return "Your email or password is incorrect!"}

    pageTitle(text){
        cy.title().should('eq', text)
        return this;
    }
    enterEmail(email) {
       // cy.get(this.getEmail()).type(email)
        this.fillText(this.getEmail(), email);
        return this;
    }
    enterPassword(pass) {
        //cy.get(this.getPass()).type(pass)
        this.fillText(this.getPass(), pass);
        return this;
    }
    seeUserName(name){
        cy.get(this.logedUserName()).contains(name)
        return this;
       }
    clickLogin(){
       // cy.get(this.clickLoginButton()).click()
        this.clickElement(this.clickLoginButton());
        return this;
    }
    clickLogOut(){
       // cy.contains(this.clickLogOutButton()).click()
        this.clickElement(this.clickLogOutButton(), true)
        return landingPage;
    }
    getInvalidErrorMessage(message){
        cy.contains(this.invalidLogin()).contains(message)
        return this;
    }
    
  
}
const loginPage = new LoginPage();
export default loginPage;