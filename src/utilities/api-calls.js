export const getRandomWord = async () => {
    const response = await fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun%2C%20adjective%2C%20verb%2C%20adverb%2C%20interjection%2C%20pronoun%2C%20preposition%2C%20article%2C%20imperative%2C%20noun-plural%2C%20noun-possessive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=7&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1');
    const data = await handleError(response);
    return data;
};

export const getWordScore = async (word) => {
  const response = await fetch(`https://api.wordnik.com/v4/word.json/${word}/scrabbleScore?api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1`);
  const data = await handleError(response);
  return data;
}

export const handleError = (response) => {
  if (!response.ok && response.status !== 404) {
    throw new Error(response)
  } else {
    return response.json()
  }
}