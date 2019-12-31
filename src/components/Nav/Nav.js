import React from 'react'
import './Nav.css'
import logo from '../../spne.png'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar'>
            <div className='container'>
                {/* <h1 className='nav-link'>Solar NE</h1> */}
                <img src={logo} alt='Solar Power New England' />
            </div>
        </nav>
      </main>
    );
  }
  
export default Nav;