describe('ultimate question', () => {
    it('[1] task 1', () => {
        cy.visit('https://ultimateqa.com/filling-out-forms/')
// select first name  and second name by id
        cy.get('#et_pb_contact_name_0').click()
        cy.get('#et_pb_contact_name_1').click()
// select first message  and second message by id

        cy.get('#et_pb_contact_message_0').click()
        cy.get('#et_pb_contact_message_1').click()
// select first button  and second button by class

        // cy.get('.et_pb_contact_submit et_pb_button').first().click()
        // cy.get('.et_pb_contact_submit et_pb_button').last().click()
        

        
    });
    it('[2] task 2', () => {
        cy.visit('https://ultimateqa.com/filling-out-forms/')
// select first name  and second name by id
        cy.get('[type="text"]').type("abdelrahman").first
        cy.get('name="et_pb_contact_message_0"]').type("this is automation testing framework using cypress").first
        
// select first message  and second message by id

//         cy.get('#et_pb_contact_message_0').click()
//         cy.get('#et_pb_contact_message_1').click()
// // select first button  and second button by class

//         cy.get('.et_pb_contact_submit et_pb_button').first().click()
//         cy.get('.et_pb_contact_submit et_pb_button').last().click()
        

        
    });
});