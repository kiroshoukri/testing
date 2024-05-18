describe('Final Project', () => {
    before(function(){

        cy.fixture('finalexample').then(function(data){

            globalThis.data = data;

        });
    });

    beforeEach(function() {

        cy.visit(data.FinalURL);

        });

    it('[1] login', () => {

        
        cy.visit(data.loginURL)
        // cy.get('[href="/login"]').click()
        cy.emailAddress().first().type(data.emailAddress1)
        cy.PasswordNum().type(data.PasswordNum1)
        cy.submitButton().eq(0).click()

        
    });
    it('[2] signup', () => {

        cy.visit(data.loginURL)
        // cy.get('[href="/login"]').click()
        cy.personName().type(data.personName1)
        cy.emailAddress().last().type(data.emailAddress1)
        cy.submitButton().eq(1).click()
       
    });

    it('[3] susbscribe(login)', () => {

        cy.visit(data.loginURL)
        // cy.get('[href="/login"]').click()
        cy.get('#susbscribe_email').type("abdelrahmanaboollo@gmail.com")
        cy.submitButton().eq(2).click()
 
    });
    
    it('[4] Contact_us', () => {

        
        cy.visit(data.ContactUsURL)
        // cy.get('[href="/contact_us"]').click()
        cy.personName().type(data.personName1)
        cy.emailAddress().type(data.emailAddress1)
        cy.subjectBody().type(data.subjectBody1)
        cy.messageBody().type(data.messageBody1)  
        cy.submitButton().eq(0).click()
       

 
    });

    it('[5] susbscribe (contact_us )', () => {

        cy.visit(data.ContactUsURL)
        // cy.get('[href="/contact_us"]').click()
        cy.get('#susbscribe_email').type("abdelrahmanaboollo@gmail.com")
        cy.submitButton().eq(1).click()
 
    });    

    it('[6] products', () => {

        https://www.automationexercise.com/products
        cy.visit(data.ProductsURL)
        // cy.get('[href="/products"]').click()
        cy.get('[href="/product_details/1"]').click()
        cy.get('[type="button"]').click()
        // cy.get('#name').type("abdelrahman")
        // // cy.get('#email').type("abdelrahmanaboollo@gmail.com")
        // cy.get('[name="review"]').type("i love software testing i love you all ")  
        // cy.get('#button-review').click()
        

 
    });

});
