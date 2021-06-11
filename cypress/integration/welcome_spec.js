describe('Welcome', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display "HELLO_WORLD" as a welcome message', () => {
    cy.get('.word-tiles').contains("H")
    cy.get('.word-tiles').contains("E")
    cy.get('.word-tiles').contains("L")
    cy.get('.word-tiles').contains("O")
    cy.get('.word-tiles').contains("_")
    cy.get('.word-tiles').contains("W")
    cy.get('.word-tiles').contains("R")
    cy.get('.word-tiles').contains("D")
  })

  it('Should display a welcome message briefly explaining the app', () => {
    cy.get('.intro').should('have.text', "Are you ever in the midst of a tough Scrabble match, and you can't seem to think of any words that take advantage of that triple score spot? Need some new inspiration? Scrabble-rouser helps you learn new 7-letter-or-less words to make you a Scrabble champ in no time. Save words you want to remember, and view top-scorers to see all the words you've learned worth 10 points or more. Let's get started!")
  })

  it('Should display a button to get a word', () => {
    cy.get('.start').should('exist')
    cy.get('.start').should('have.text', 'Show me a word')
  })

  it('Should go to a page with a random word displayed when the button is clicked', () => {
    cy.get('.start').click()
      .url().should('include', '/learn')
  })
})