describe('Letter', () => {
  beforeEach(() => {
    cy.intercept('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20verb%2C%20adjective%2C%20adverb&excludePartOfSpeech=abbreviation%2C%20conjunction%2C%20family-name%2C%20given-name%2C%20idiom%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=5&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1', {
      word: "no"
    })
      .visit('http://localhost:3000/learn')
  })

  it('Should contain a number for the score of each letter of the word displayed', () => {
    cy.get('.scrabble-tile__letter').contains('N')
      .get('.scrabble-tile__number').contains('1')
      .get('.scrabble-tile__letter').contains('O')
      .get('.scrabble-tile__number').contains('1')
  })
})