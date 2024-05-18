describe('contactus', () => {
    before(function(){
        cy.fixture('example').then(function(data){

            globalThis.data = data;
        })



    })


    it('[1] ay haga ', () => {
        cy.visit(data.contactusURL)
        cy.get('[name="first_name"]').type(data.firstname)
        cy.get('[name="last_name"]').type(data.lastname)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.comments)
        cy.get(".contact_button").first().click()
        cy.get(".contact_button").last().click()
        

    });
});