const { css } = require("cypress/types/jquery");
const { eq } = require("cypress/types/lodash");

describe('login', () => {
    it('[1] Assertions.', () => {

        cy.visit("https://www.automationteststore.com/")
        cy.get('[href="http://www.facebook.com"]').first.should('have.attr','target','_blank')
        cy.get('[href="https://twitter.com/"]').first.should('have.attr','target','_blank') 
        cy.get('[href="http://www.abantecart.com"]').should('havecss','.pull-right.align_center' ,'target',)  
        
    });
});

describe('login', () => {
    it('[2] how cypress visit the loginpage', () => {

        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.title().should('eq','Account Login')
        cy.loginName.eq(1).type("abdelrahman") 
        cy.passwordNum.type("123456")
        cy.submitButton()
        
    });
});