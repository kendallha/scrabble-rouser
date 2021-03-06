describe('Route error handling', () => {
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

describe('Word error handling', () => {
  it('Should display an error message when there is a problem fetching a word', () => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      statusCode: 404
    })
      .visit('http://localhost:3000/learn')
      .get('.error').should('have.text', 'Error: Something went wrong, please try again.')
})

  it('Should display a specific error message when the user has been rate limited', () => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      statusCode: 429
    })
      .visit('http://localhost:3000/learn')
      .get('.error').should('have.text', "Error: Whoa there, champ! We're having trouble keeping up. Give us a moment to catch up and then try again.")
  })

  it('Should have a button to go back to main page after an error is displayed', () => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      statusCode: 404
    })
      .visit('http://localhost:3000/learn')
      .get('.redirect').should('have.text','Back to main').click()
      .url().should('eq', 'http://localhost:3000/')

  })
})