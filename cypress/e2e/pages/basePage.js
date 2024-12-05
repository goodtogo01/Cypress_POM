/* Base Page contains most common and reusable functions and methods which may be multiple time 
will be utilizing in different class. These common functions will contains all the action, function, and many more.
In below I will add few of them */

///<reference types="Cypress" />

class BasePage {
    validatePageTitle(text){
        cy.title().should('eq', text)
    }

    // Navigate to URL
    navigatToURL(url) {
        cy.visit(url);
    }
    // Click on Elements
    clickElement(locator, useContains = false) {
        if (useContains) {
            cy.contains(locator).click()
        } else {
            cy.get(locator).click();
        }
    }

    //Type or Entering Text
    fillText(locator, textToEnter, useContains = false) {
        if (useContains) {
            cy.contains(locator).type(textToEnter);
        } else {
            cy.get(locator).type(textToEnter)
        }
    }
    // Retrive Text from the element
    getElementText(locator, useContains=false){
        if(useContains){
            return cy.contains(locator).getElementText('text')
        }else{
            return cy.get(locator).getElementText('text')
        }
    }
    //contain text in element and assertions
    elementFound(locator, text, useContains=false){
        if(useContains){
            cy.contains(locator).should('be.visible')
        }else{
            cy.get(locator).should('contain', text)
        }
    }
    // Wait for element to be visible
    elementVisible(locator, useContains=false){
        if(useContains){
            cy.contains(locator).should('be.visible')
        }else{
            cy.get(locator).should('be.visible')
        }
    }
     // Assert if an element to be visible
     waitForElementVisible(locator, useContains=false){
        if(useContains){
           return cy.contains(locator).should('be.visible')
        }else{
           return cy.get(locator).should('be.visible')
        }
    }
    // Select Item with desire value
    selectItems(locator, text, useContains=false){
        if(useContains){
            return cy.contains(locator).type(text).click()
        }else{
            return cy.get(locator).click()
        }
    }

}

export default BasePage;