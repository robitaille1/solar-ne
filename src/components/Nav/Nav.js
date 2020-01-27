import React from 'react'
import './Nav.css'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar'>
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