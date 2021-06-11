describe('Words', () => {
  beforeEach(() => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      word: "peach"
    })
    cy.visit('http://localhost:3000/learn')
  })

  it('Should display a loading message while the word is being fetched', () => {
    cy.get('.loading').should('have.text', 'Looking for a great new word...')
  })

  it('Should display the fetched word', () => {
    cy.get('.word-display').contains("P")
      .get('.word-display').contains("E")
      .get('.word-display').contains("A")
      .get('.word-display').contains("C")
      .get('.word-display').contains("H")
  })

  it('Should display the point total for the fetched word', () => {
    cy.get('.points').should('have.text', '12 points')
  })

  it('Should have a button to get another word', () => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      word: "maze"
    })
      .get('.new').should('have.text', "Another word").click()
      .get('.word-display').contains("M")
      .get('.word-display').contains("A")
      .get('.word-display').contains("Z")
      .get('.word-display').contains("E")
      .get('.points').should('have.text', '15 points')
  })

  it('Should have a button to Save a word', () => {
    cy.get('.save').should('have.text', 'Save').click()
      .visit('http://localhost:3000/saved')
      .get('.word').contains('P')
      .get('.word').contains("E")
      .get('.word').contains("A")
      .get('.word').contains("C")
      .get('.word').contains("H")
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