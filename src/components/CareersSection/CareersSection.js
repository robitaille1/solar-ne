import React from "react";
import Img from "../utils/Img";
// import { Event } from "../Tracking/Tracking";

const careersSection = () => (
  <>
    <h2>Careers</h2>
    <Img src="https://images.unsplash.com/photo-1574170623305-76d87a78cfcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
    <p>Would you like to work in a fast-paced start up?</p>
    <p>
      Perhaps you're interested in working in the solar or renewable energy
      field to make the world a better place?
    </p>
    <p>
      If you're interested, please submit your resumé, contact information and a
      brief description of yourself and why you want to work for us below! We
      look forward to hearing from you!
    </p>
    <form
      action="https://formsubmit.co/contact@solarpowerne.com"
      method="POST"
      encType="multipart/form-data"
      onSubmit={() => Event("FORM", "Careers form submitted", "CAREERS_PAGE")}
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
          <input type="email" name="email" className="field-long" required />
        </li>
        <li>
          <label>Phone Number</label>
          <input type="tel" name="phone" className="field-long"></input>
        </li>
        <li>
          <label>
            Description <span className="required">*</span>
          </label>
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
        <h5 className="required required-text">* Required</h5>
        <li style={{ textAlign: "center" }}>
          <input type="submit" value="Submit" />
        </li>
      </ul>
    </form>
  </>
);

export default careersSection;
