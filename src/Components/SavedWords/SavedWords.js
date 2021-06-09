import React from 'react';

const SavedWords = ({ words }) => {
  const wordList = words.map(word => {
    return (
      <li>{word.word}: {word.value}</li>
    )
  });
  return(
    <section>
      <h3>Saved Words</h3>
      <ul>{wordList}</ul>
    </section>
  )
}

export default SavedWords;