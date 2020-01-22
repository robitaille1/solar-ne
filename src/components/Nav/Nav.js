import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar'>
            <div className='container'>
                <img className='nav-logo' src={logo} alt='Solar Power New England' />
            </div>
        </nav>
      </main>
    );
  }
  
export default Nav;