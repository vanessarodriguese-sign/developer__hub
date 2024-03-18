describe('first test', () => {
	it('renders the default elements on the screen', () => {
		cy.visit('http://localhost:3000')
		cy.get('[data-testid="cypress-title"]').should('exist').should('have.text', 'Header H2')
	})
})
