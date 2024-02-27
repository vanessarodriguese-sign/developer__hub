describe('first test', () => {
  it('renders the default elements on the screen', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="cypress-title"]').should('exist')
      .should('have.text', 'Starting the new developer hub')
    cy.get('[data-testid="navbar-links"]').should('exist')
  })
})
