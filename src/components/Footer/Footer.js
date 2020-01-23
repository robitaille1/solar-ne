import React from 'react'
import './Footer.css'
import oldFlag from '../../assets/oldflag.gif'
import newFlag from '../../assets/newflag.png'

function Footer() {
  const date = new Date()
    return (
      <main className='Footer'>
        <nav className='footer'>
            <div className='links-div'>
                <div className='links first'>
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
                <div className='links footer-statement'>
                  <p>Interested in helping your neighbors become more sustainable, and energy independent? Click here for more info, or contact us today!</p>
                  <a href="mailto:contact@solarpowerne.com" className='contact-link'>contact@solarpowerne.com</a>
                </div>
              </div>
            <div className='flag-div'>
              <img className='flags' src={oldFlag} alt='old flag of Maine'/>
              <img className='flags' src={newFlag} alt='current flag of Maine'/>
            </div>
            <div className='container'>
                <h5>Copyright Solar Power New England © {date.getFullYear()} </h5>
                <p>Made with <span role='img' aria-label="lobster">🦞</span> from Maine</p>
            </div>
        </nav>
      </main>
    );
  }
  
export default Footer;