describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display the app name in the header', () => {
    cy.get('.app-name').should('have.text', 'Scrabble-rouser')
  }) 

  it('Should have a nav link to learn words', () => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      body: {word: "quiz" },
      delay: 50
    })
      .get('.learn').should('have.text', 'Learn words')
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