import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar container'>
            <div>
                <img className='nav-logo' src={logo} alt='Solar Power New England' />
            </div>
            <div className='nav-links'>
              <a href="mailto:contact@solarpowerne.com" className='button'>Contact</a>
            </div>
        </nav>
      </main>
    );
  }
  
export default Nav;