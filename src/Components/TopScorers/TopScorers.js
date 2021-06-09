import React from 'react';

const TopScorers = ({ words }) => {
    const wordList = words.map(word => {
      return (
        <li>{word.word}: {word.value}</li>
      )
    });
    return(
      <section>
        <h3>Top Scoring Words</h3>
        <ul>{wordList}</ul>
      </section>
    )
}

export default TopScorers;