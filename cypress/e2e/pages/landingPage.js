///<reference types="Cypress"/>
import BasePage from "./basePage"
import loginPage from "./loginPage";


class LandingPage extends BasePage{

   footers(){
      return "div[class='single-widget-'] h2"
   }
    gotoLogin (){
        return " Signup / Login"
     }
     loginSource(){
        //cy.xpath(this.gotoLogin()).click()
        this.clickElement(this.gotoLogin(), true);
        return loginPage;
     }
     varifyCurrentPageTitle(text){
      cy.title().should('eq',text)
      return this;
     }
     foterVisible(text){
     cy.get(this.footers()).should('contain', text)
     }
}
const landingPage = new LandingPage()
export default landingPage;