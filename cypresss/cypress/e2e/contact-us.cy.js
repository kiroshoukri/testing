const { includes } = require("cypress/types/lodash");

describe('contact us', () => {
    it('[1] how cypress visit the website ', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        
    });
//.only if we need to run one testcase
// .skip 
    it('[2] how to select elements by ID', () => {
        cy.visit("https://www.webdriveruniversity.com/index.html")
        
        cy.get('#contact-us').click()

        
    });


    it('[3] how to select elements by class', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        
        //select element
        cy.get('.contact_button').first().click()
        cy.get('.contact_button').last().click()

        
    });
//how to select elements by attribute or css selector
    it('[4] submit contact us with positive scenario ', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("abdelrahman")
        cy.get('[name="last_name"]').type("yehia")
        cy.get('[name="email"]').type("abdelrahmanaboollo@yahoo.com")
        cy.get('.feedback-input').eq(3).type("this is automation testing framework using cypress")
        cy.get('[type="submit"]').click()
        cy.url().should('includes','contact-form-thank-you')

        
    });

    // it('[5] submit contact us with negative scenario', () => {
    //     cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    //     cy.get('[name="first_name"]').type("abdelrahman")
    //     cy.get('[name="last_name"]').type("yehia")
    //     cy.get('[name="email"]').type("abdelrahmanaboollo@yahoo.com")
    //     //cy.get('.feedback-input').eq(3).type("this is automation testing framework using cypress")
    //     cy.get('[type="submit"]').click()
    //     //cy.get('body').should('be.exist')
    //     cy.contains('all fields are required').should('be.exist')
    // });
});