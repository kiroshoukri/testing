Cypress.Commands.add('emailAddress', () => {
    cy.get('[name="email"]')
  })
 
  Cypress.Commands.add('PasswordNum', () => {
    cy.get('[name="password"]')
  })

  Cypress.Commands.add('submitButton', () => {
    cy.get('[type="submit"]')
  })
 
  Cypress.Commands.add('personName', () => {
    cy.get('[name="name"]')
  })

  Cypress.Commands.add('messageBody', () => {
    cy.get('[name="message"]')
  })

  Cypress.Commands.add('subjectBody', () => {
    cy.get('[name="subject"]')
  })




