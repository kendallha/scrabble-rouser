import React from 'react';

const Error = ({ error }) => {
  return(
    <h3 className='error-msg'>Error: {error}</h3>
  )
}

export default Error;