import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';
import PropTypes from 'prop-types'

const Error = ({ error }) => {
  return(
    <div className='error-wrapper'>
    <h3 className='error'>Error: {error}</h3>
      <Link to='/'>
        <button className='redirect'>Back to main</button>
      </Link>
    </div>
  )
}

export default Error;