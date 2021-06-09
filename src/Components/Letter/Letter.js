import React from 'react';

const Letter = ({ letter, value }) => {
  return(
    <div>
      <article>{letter}</article>
      <article>{value}</article>
    </div>
  )
}
export default Letter;