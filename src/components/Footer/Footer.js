import React from 'react'
import './Footer.css'

function Footer() {
  const date = new Date()
    return (
      <main className='Footer'>
        <nav className='footer'>
            <div className='container'>
                <h5>Copyright Solar Power New England © {date.getFullYear()} </h5>
            </div>
            <div className='links-div'>
              <div className='links'>
                <p>Info</p>
                <p>Investors</p>
                <p>Contact</p>
                <p>Careers</p>
                <p>Links</p>
              </div>
              <div className='links'>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Linkedin</p>
              </div>
              <div className='links'>
                <p>Interested in helping your neighbors become more sustainable, and energy independent? Click here for more info, or contact us today!</p>
                <a href="mailto:contact@solarpowerne.com">contact@solarpowerne.com</a>
              </div>
            </div>
        </nav>
      </main>
    );
  }
  
export default Footer;