describe('URLRoutes', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

  it('Should have a 404 page for a non-existent path entered', () => {
    cy.visit('http://localhost:3000/giggles')
      .get('.error').should('have.text', 'Error: 404 - Page not found.')
  })

  it('Should have a button to return to the main page from the 404 page', () => {
    cy.visit('http://localhost:3000/giggles')
      .get('.error').should('have.text', 'Error: 404 - Page not found.')
      .get('.redirect').should('have.text', 'Back to main').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('Should route back to the homepage from any page if a user clicks on the app name', () => {
    cy.visit('http://localhost:3000/saved')
      .get('.app-name').click()
      .url().should('eq', 'http://localhost:3000/')
  })
})