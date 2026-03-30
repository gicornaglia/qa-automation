Cypress.Commands.add('getUserById', (id) => {
    return cy.request('GET', `/users/${id}`)
  })