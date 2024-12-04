///<reference types="Cypress"/>

import BasePage from "./basePage"


class HomePage extends BasePage{
  
    getText(){return "div[class='item active'] div[class='col-sm-6'] p" }
    homeMenue() { return " Home"; }
    productManue() {return " Products"; }
    cartManue() {return " Cart"; }
    contectUsManue() {return " Contact us" }

    // Check Home Manue visibvle or not

    getHomeManue(){
        cy.log("Validate Home manue.")
        cy.contains(this.homeMenue()).should('be.visible')
        //this.elementVisible(this.homeMenue(), true);
        return this;
    }
    // Check Product Manue visibvle or not
    getProductanue(){
        cy.log("Validate Products manue.")
       //cy.contains(this.productManue()).should('be.visible')
       this.elementVisible(this.productManue(), true);
        return this;
    }
    // Check Cart Manue visibvle or not
    getCartManue(){
        cy.log("Validate Cart manue.")
        //cy.contains(this.cartManue()).should('be.visible')
        this.elementVisible(this.cartManue(), true);
        return this;
    }
    // Check Contact us Manue visibvle or not
    getContactUsManue(){
        cy.log("Validate Contact Us manue.")
       // cy.contains(this.contectUsManue()).should('be.visible')
       this.elementVisible(this.contectUsManue(), true);
        return this;
    }

    getElementText(){
        cy.contains(this.getText()).getElementText('text')
    }

}
const homePage = new HomePage();
export default homePage;