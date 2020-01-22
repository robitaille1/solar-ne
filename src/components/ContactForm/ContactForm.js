import React from 'react'
import './ContactForm.css'


export default class ContactForm extends React.Component  {
  render() {
    return (
      <main className='ContactForm'>
        <section className="contact container">
            <h3 className='section-title'>Contact Us</h3>
            <form>
              <ul className="form-style-1">
                <li>
                  <label>Full Name <span className="required">*</span></label>
                  <input type="text" name="field1" className="field-divided first-name" placeholder="First" /> 
                  <input type="text" name="field2" className="field-divided" placeholder="Last" /></li>
                  <li>
                      <label>Email <span className="required">*</span></label>
                      <input type="email" name="field3" className="field-long" />
                  </li>
                  <li>
                      <label>Address</label>
                      <input type="text" name="field3" className="field-long" />
                  </li>
                  <li>
                      <label>Your Message <span className="required">*</span></label>
                      <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
                  </li>
                  <p>Average daily KWHs</p>
                  <li>
                    <div className='month-form'>
                      <div className='month-item'>
                        <label htmlFor='jan'>Jan</label>
                        <input name='jan' type='number' className='field-divided field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='feb'>Feb</label>
                        <input name='feb' type='number' className='field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='mar'>Mar</label>
                        <input name='mar' type='number' className='field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='apr'>April</label>
                        <input name='apr' type='number' className='field-short'></input>
                      </div>
                    </div>
                    <div className='month-form'>
                      <div className='month-item'>
                        <label htmlFor='may'>May</label>
                        <input name='may' type='number' className='field-divided field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='june'>June</label>
                        <input name='june' type='number' className='field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='july'>July</label>
                        <input name='july' type='number' className='field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='aug'>Aug</label>
                        <input name='aug' type='number' className='field-short'></input>
                      </div>
                    </div>
                    <div className='month-form'>
                      <div className='month-item'>
                        <label htmlFor='sept'>Sept</label>
                        <input name='may' type='number' className='field-divided field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='oct'>Oct</label>
                        <input name='oct' type='number' className='field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='nov'>Nov</label>
                        <input name='nov' type='number' className='field-short'></input>
                      </div>
                      <div className='month-item'>
                        <label htmlFor='dec'>Dec</label>
                        <input name='dec' type='number' className='field-short'></input>
                      </div>
                    </div>
                  </li>
                  <li>
                      <input type="submit" value="Submit" />
                  </li>
            </ul>
          </form>



                {/* <form className='form-container'>
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
                </form> */}
        </section>
      </main>
    );
  }
}
  