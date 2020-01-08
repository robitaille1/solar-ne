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
                    <label htmlFor="phone">Phone: </label>
                    <input
                        type='tel'
                        placeholder="555-123-4567" 
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
                  <div className='contact-form-item'>
                    <p>Average daily KWHs</p>
                    <label htmlFor='jan'>Jan:</label>
                    <input name='jan' type='number' className='month-input'></input>
                    <label htmlFor='feb'>Feb:</label>
                    <input name='feb' type='number' className='month-input'></input>
                    <label htmlFor='mar'>Mar:</label>
                    <input name='mar' type='number' className='month-input'></input>
                    <label htmlFor='apr'>Apr:</label>
                    <input name='apr' type='number' className='month-input'></input>
                    <label htmlFor='may'>May:</label>
                    <input name='may' type='number' className='month-input'></input>
                    <label htmlFor='june'>June:</label>
                    <input name='june' type='number' className='month-input'></input>
                    <label htmlFor='july'>July:</label>
                    <input name='july' type='number' className='month-input'></input>
                    <label htmlFor='aug'>Aug:</label>
                    <input name='aug' type='number' className='month-input'></input>
                    <label htmlFor='sept'>Sept:</label>
                    <input name='sept' type='number' className='month-input'></input>
                    <label htmlFor='oct'>Oct:</label>
                    <input name='oct' type='number' className='month-input'></input>
                    <label htmlFor='nov'>Nov:</label>
                    <input name='nov' type='number' className='month-input'></input>
                    <label htmlFor='dec'>Dec:</label>
                    <input name='dec' type='number' className='month-input'></input>
                  </div>
                    <button className='btn-class'>Submit</button>
                </form>
        </section>
      </main>
    );
  }
}
  