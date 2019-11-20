import React from 'react'
import './ContactForm.css'


export default class ContactForm extends React.Component  {
  render() {
    return (
      <main className='ContactForm'>
        <section className="contact container">
            <h3 className='section-title'>Contact Us</h3>
                <form className='form-container'>
                  <div className='contact-form-item'>
                    <label htmlFor="name">Name: </label>
                    <input
                        type='text'
                        placeholder="John Smith" 
                        required
                    />
                  </div>
                  <div className='contact-form-item'>
                    <label htmlFor="email">Email: </label>
                    <input
                        type='email'
                        placeholder="email@email.com" 
                        required
                    />
                  </div>
                  <div className='contact-form-item'>
                    <label htmlFor="address">Address: </label>
                    <input
                        type='text'
                        placeholder="123 Main Street" 
                    /> 
                  </div>
                  <div className='contact-form-item'>
                    <label htmlFor="comments">Additional Comment: </label>
                    <textarea name='comments'></textarea>
                  </div>
                    <button className='btn-class'>Submit</button>
                </form>
        </section>
      </main>
    );
  }
}
  