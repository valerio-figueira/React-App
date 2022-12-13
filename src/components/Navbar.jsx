import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar() {

  function toggleMobile(){
    const nav = document.querySelector('.navbar');

    if(!nav.matches('.mobile')){
      nav.classList.add('mobile')
    } else{
      nav.classList.remove('mobile')
    }
  }

  return (
    <header id='header'>
        <Link to='/'>
          <h1 className='title'>W.</h1>
        </Link>

        <nav className='navbar'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/New">New</NavLink>
          <NavLink to="/Popular">Popular</NavLink>
          <NavLink to="/Trending">Trending</NavLink>
          <NavLink to="/About">About</NavLink>
          <div className='close-btn' onClick={toggleMobile}>&times;</div>
        </nav>
        <button className='mobile-btn fa fa-bars' onClick={toggleMobile}></button>
    </header>
  )
}

export default Navbar;