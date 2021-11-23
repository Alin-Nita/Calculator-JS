it('Should check that all operators buttons and digits work properly', () => {
  cy.visit('http://127.0.0.1:5501/index.html')

  cy.get('.seven').click()
  cy.get('.add').click()
  cy.get('.two').click()
  cy.get('.equal').click()
  cy.get(".display").should('contain', '9')

  cy.get('.nine').click()
  cy.get('.minus').click()
  cy.get('.three').click()
  cy.get('.equal').click()
  cy.get(".display").should('contain', '6')

  cy.get('.two').click()
  cy.get('.multiply').click()
  cy.get('.four').click()
  cy.get('.equal').click()
  cy.get(".display").should('contain', '8')

  cy.get('.eight').click()
  cy.get('.divide').click()
  cy.get('.one').click()
  cy.get('.equal').click()
  cy.get(".display").should('contain', '8')

  cy.get('.four').click()
  cy.get('.multiply').click()
  cy.get('.zero').click()
  cy.get('.equal').click()
  cy.get(".display").should('contain', '0')

  cy.get('#clear').click()
  cy.get(".display").should('contain', '')

})