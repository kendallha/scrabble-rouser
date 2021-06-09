export const getRandomWord = async () => {
    const response = await fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=7&api_key=1weum3dz1dl1kbq02ep9xe0jt8ewzzu5wyc5quxfa80kz7rw1');
    const data = await handleError(response);
    return data;
};

export const handleError = (response) => {
  if (!response.ok) {
    console.log(response);
    throw new Error(response.message)
  } else {
    return response.json()
  }
}