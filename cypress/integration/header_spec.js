describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display the app name in the header', () => {
    cy.get('.app-name').should('have.text', 'Scrabble-rouser')
  }) 

  it('Should have a nav link to learn words', () => {
    cy.get('.learn').should('have.text', 'Learn words')
      .get('.learn').click()
      .url().should('include', '/learn')
  })

  it('Should have a nav link to view saved words', () => {
    cy.get('.saved').should('have.text', 'Saved words')
      .get('.saved').click()
      .url().should('include', '/saved')
  })

  it('Should have a nav link to view top-scoring words', () => {
    cy.get('.top').should('have.text', 'Top-scorers')
      .get('.top').click()
      .url().should('include', '/topscorers')
  })
})