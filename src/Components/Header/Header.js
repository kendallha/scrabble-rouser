import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='app-name'>Scrabble-rouser</h1>
      </Link>
      <nav className='nav'>
        <NavLink to='/learn' activeStyle={{
    borderBottom: '4px solid black'
  }}>
          <h2 className='nav-link'>Learn words</h2>
        </NavLink>
        <NavLink to='/saved' >
          <h2 className='nav-link'>Saved words</h2>
        </NavLink>
        <NavLink to='/topscorers'>
          <h2 className='nav-link'>Top-scorers</h2>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;