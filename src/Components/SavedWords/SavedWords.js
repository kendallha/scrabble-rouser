import React from 'react';

const SavedWords = ({ words, heading }) => {
  console.log(words);
  const wordList = words.map(word => {
    return (
      <li>{word.word}: {word.value}</li>
    )
  });
  return(
    <section>
      <h3>{heading}</h3>
      <ul>{wordList}</ul>
    </section>
  )
}

export default SavedWords;