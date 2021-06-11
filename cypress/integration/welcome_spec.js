describe('Welcome', () => {
  beforeEach(() => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      word: "peach"
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display "HELLO_WORLD" as a welcome message', () => {
    cy.get('.word-tiles').contains("H")
      .get('.word-tiles').contains("E")
      .get('.word-tiles').contains("L")
      .get('.word-tiles').contains("O")
      .get('.word-tiles').contains("_")
      .get('.word-tiles').contains("W")
      .get('.word-tiles').contains("R")
      .get('.word-tiles').contains("D")
  })

  it('Should display a welcome message briefly explaining the app', () => {
    cy.get('.intro').should('have.text', "Are you ever in the midst of a tough Scrabble match, and you can't seem to think of any words that take advantage of that triple score spot? Need some new inspiration? Scrabble-rouser helps you learn new 7-letter-or-less words to make you a Scrabble champ in no time. Save words you want to remember, and view top-scorers to see all the words you've learned worth 10 points or more. Let's get started!")
  })

  it('Should display a button to get a word', () => {
    cy.get('.start').should('have.text', 'Show me a word')
  })

  it('Should go to a page with a random word displayed when the button is clicked', () => {
    cy.get('.start').click()
      .url().should('include', '/learn')
  })
})