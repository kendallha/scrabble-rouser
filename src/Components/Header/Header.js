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
          borderBottom: '3px solid black'
          }}>
          <h2 className='nav-link learn'>Learn words</h2>
        </NavLink>
        <NavLink to='/saved' activeStyle={{
          borderBottom: '3px solid black'
          }} >
          <h2 className='nav-link saved'>Saved words</h2>
        </NavLink>
        <NavLink to='/topscorers' activeStyle={{
          borderBottom: '3px solid black'
          }} >
          <h2 className='nav-link top'>Top-scorers</h2>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;