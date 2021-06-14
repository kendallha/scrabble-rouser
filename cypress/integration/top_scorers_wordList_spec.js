describe('TopScorers', () => {
  beforeEach(() => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      word: "peach"
    })
      .visit('http://localhost:3000/learn')
      .visit('http://localhost:3000/topscorers')
  })

  it('Should automatically display any words viewed with more than 10 points', () => {
    cy.get('.word').contains('P')
      .get('.word').contains("E")
      .get('.word').contains("A")
      .get('.word').contains("C")
      .get('.word').contains("H")
  })

  it('Should display the point total next to the saved word', () => {
    cy.get('.score').should('have.text', '12 points')
  })
  
  it('Should allow a user to delete a top-scoring word', () => {
    cy.get('.fas').click()
      .get('.empty-wrapper').should('not.have.class', '.word')
  })

  it('Should inform the user when they don\'t have any top-scorers listed', () => {
    cy.get('.fas').click()
      .get('.empty-message').should('have.text', 'You haven\'t encountered any top-scoring words yet. Let\'s go find some!')
  })

  it('Should display a button to get words when the user doesn\'t have any in the top-scorers list', () => {
    cy.get('.fas').click()
      .get('.empty-message').should('have.text', 'You haven\'t encountered any top-scoring words yet. Let\'s go find some!')
      .get('.start').should('have.text', 'Show me a word').click()
      .url().should('eq', 'http://localhost:3000/learn')
  })
})