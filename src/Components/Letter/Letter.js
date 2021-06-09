import React from 'react';

const Letter = ({ tile, value }) => {
  return(
    <div>
      <article>{tile}</article>
      <article>{value}</article>
    </div>
  )
}
export default Letter;