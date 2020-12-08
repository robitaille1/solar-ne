import React from "react";
import "./ContactForm.css";
// import { Event } from "../Tracking/Tracking";
import ReactGA from "react-ga";

const contactForm = () => {
  return (
    <main className="ContactForm">
      <section className="contact container" id="contact">
        <h3 className="section-title">Contact Us</h3>
        <form
          action="https://formsubmit.co/contact@solarpowerne.com"
          method="POST"
          onSubmit={ReactGA.event({
            category: "FORM",
            action: "Contact form submitted",
            label: "HOME_PAGE",
          })}
        >
          <ul className="form-style-1">
            <li>
              <label>
                Full Name <span className="required">*</span>
              </label>
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
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="field-long"
                required
              />
            </li>
            <li>
              <label>Address</label>
              <input type="text" name="address" className="field-long" />
            </li>
            <li>
              <label>
                Your Message <span className="required">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="field-long field-textarea"
                required
              />
            </li>
            <p className="required required-text">* Required</p>
            <p>Average daily KWHs</p>
            <p>
              Provide us with the values from your energy bill to allow us to
              understand your current energy consumption
            </p>
            <li>
              <div className="month-form">
                <div className="month-item">
                  <label htmlFor="jan">Jan</label>
                  <input
                    name="jan"
                    type="number"
                    className="field-divided field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="feb">Feb</label>
                  <input
                    name="feb"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="mar">Mar</label>
                  <input
                    name="mar"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="apr">April</label>
                  <input
                    name="apr"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
              </div>
              <div className="month-form">
                <div className="month-item">
                  <label htmlFor="may">May</label>
                  <input
                    name="may"
                    type="number"
                    className="field-divided field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="june">June</label>
                  <input
                    name="june"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="july">July</label>
                  <input
                    name="july"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="aug">Aug</label>
                  <input
                    name="aug"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
              </div>
              <div className="month-form">
                <div className="month-item">
                  <label htmlFor="sept">Sept</label>
                  <input
                    name="may"
                    type="number"
                    className="field-divided field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="oct">Oct</label>
                  <input
                    name="oct"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="nov">Nov</label>
                  <input
                    name="nov"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
                <div className="month-item">
                  <label htmlFor="dec">Dec</label>
                  <input
                    name="dec"
                    type="number"
                    className="field-short"
                  ></input>
                </div>
              </div>
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </section>
    </main>
  );
};

export default contactForm;
