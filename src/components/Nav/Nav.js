import React from 'react'
import './Nav.css'
// import logo from '../../assets/logo.png'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar container'>
            <div className='brand-div'>
              <h1 className='brand'>SOLAR POWER <span className='new-england'>NEW ENGLAND</span></h1>
            </div>
            <div className='nav-links'>
              <a href="mailto:contact@solarpowerne.com" className='button'>Contact Us</a>
            </div>
        </nav>
      </main>
    );
  }
  
export default Nav;