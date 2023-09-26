import React from "react";
import gtpic from "../assets/getintouch.svg";
import bropic from "../assets/contactusbro.svg";
import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="contactuspage">
      <div className="getintouch">
        <img className="gtpic" alt="gpic" src={gtpic} />
        <div className="whiterect">
          <div className="gettouchtext">GET IN TOUCH</div>
          {/* <div className="homeandcontact">Home / Contact Us</div> */}
        </div>
      </div>

      <div className="contactcolumns">
        <div className="contactrows">
          <div>
            <div className="contacttext">
              <div className="title">Contact Us</div>
              <p className="body">
                We’re here to help! Tell us what you’re looking for and we’ll
                get you connected to the right people.
              </p>
            </div>

            <form className="contactform">
              <div className="forminput">
                <div className="sec">
                  <label className="labels">
                    Name
                    <span className="span">*</span>
                  </label>
                  <input
                    className="contactInput"
                    // defaultValue={"Sejal"}
                    type="text"
                    required
                  ></input>
                </div>

                <div className="sec">
                  <label className="labels">
                    Email Address
                    <span className="span">*</span>
                  </label>
                  <input
                    className="contactInput"
                    // defaultValue={"yes@company.com"}
                    type="text"
                    required
                  ></input>
                </div>

                <div className="sec">
                  <label className="labels">
                    Phone
                    <span className="span">*</span>
                  </label>
                  <input
                    className="contactInput"
                    // defaultValue={"123456789"}
                    type="text"
                    required
                  ></input>
                </div>

                <div className="sec">
                  <label className="labels">
                    Date*
                    {/* <span className="span">*</span> */}
                  </label>
                  <input className="contactInput" type="date" required></input>
                </div>
              </div>

              <div className="descriptioninput">
                <label className="labels">
                  Project Description
                  <span className="span">*</span>
                </label>
                <input className="contactInput" type="text" required></input>
                {/* <div style={{ marginTop: "7px" }}>
                  <input type="checkbox" required></input>
                  <span className="teamCheck">checkbox here</span>
                </div> */}
              </div>

              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("msg sent");
                  }}
                  className="ourConcept contactButton"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
          <img className="bropic" alt="bpic" src={bropic} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
