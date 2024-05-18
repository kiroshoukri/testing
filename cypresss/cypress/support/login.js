Cypress.Commands.add('loginName', () => {
    cy.get('[type="text"]')
})

Cypress.Commands.add('passwordNum', () => {
    cy.get('[type="password"]')
})

Cypress.Commands.add('submitButton', () => {
    cy.get('[type="submit"]').click
})