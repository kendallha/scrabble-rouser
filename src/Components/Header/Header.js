import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='app-name'>Scrabble-rouser</h1>
      </Link>
      <NavLink to='/learn'>
        <h2>Learn words</h2>
      </NavLink>
      <NavLink to='/saved'>
        <h2>Saved words</h2>
      </NavLink>
      <NavLink to='/topscorers'>
        <h2>Top-scorers</h2>
      </NavLink>
    </header>
  )
}