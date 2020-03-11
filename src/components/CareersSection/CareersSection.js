import React from 'react'
// import './AboutSection.css'


const careersSection = () => {
    return(
        <main className='AboutSection'>
            <div className='about-section'>
                <h2>Careers</h2>
                <p>
                    Would you like to work in a fast-paced start up?
                </p>
                <p>
                    Perhaps you're interested in working in the solar or renewable energy field to make the world a better place?
                </p>
                <p>
                    If you're interested, please submit your resume, contact information and a brief description of yourself below! We look forward to hearing from you!
                </p>
                <form action="https://formsubmit.co/contact@solarpowerne.com" method="POST" encType="multipart/form-data">
              <ul className="form-style-1">
                <li>
                  <label>Full Name <span className="required">*</span></label>
                  <input 
                    type="text" 
                    name="first name" 
                    className="field-divided first-name" 
                    placeholder="First" 
                    required 
                  /> 
                  <input 
                    type="text" 
                    name="last name" 
                    className="field-divided" 
                    placeholder="Last" 
                    required 
                    />
                </li>
                <li>
                    <label>Email <span className="required">*</span></label>
                    <input type="email" name="email" className="field-long" required />
                </li>
                <li>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" className="field-long"></input>
                </li>
                <li>
                    <label>Description <span className="required">*</span></label>
                    <textarea 
                      name="description" 
                      id="message" 
                      className="field-long field-textarea" 
                      required
                    />
                </li>
                <li>
                    <label htmlFor="resume">Attach resume (PDF format)</label>
                    <input type="file" id="resume" name="resume" accept=".pdf"></input>
                </li>
                <p className='required required-text'>* Required</p>
                  <li>
                      <input type="submit" value="Submit" />
                  </li>
            </ul>
          </form>
            </div>
        </main>
    )
}

export default careersSection;