describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('navigates to the about page', () => {
    cy.contains('Home').click()
    cy.url().should('include', '/')
    cy.contains('Starting the new developer hub').should('exist')
  })
})
