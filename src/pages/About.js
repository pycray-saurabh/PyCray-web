import React from "react";
import "../styles/About.css";
import aboutpic from "../assets/aboutpic.svg";
import aboutcard from "../assets/aboutuscard.svg";
import profilepic1 from "../assets/profilepic1.svg";

function About() {
  return (
    <div className="aboutpage">
      <div className="aboutsec">
        <img className="aboutpic" alt="aspic" src={aboutpic} />
        <div className="whiterect">
          <div className="aboutustext">ABOUT US</div>
          <div className="homeandabout">Home / About</div>
        </div>
      </div>

      <div className="whatwedo">
        <div className="weDo">
          <img className="aboutcardpic" alt="acpic" src={aboutcard} />
        </div>
        <div className="whatwedorows">
          <div className="title">What We Do</div>
          <p className="body">
            We're here to help business owners like you. Bring your visions to
            life by building custom products from scratch. Whether you have a
            vision for an advanced mobile app, a sophisticated multi-sided
            platform, a thriving online marketplace, a robust e-commerce
            website, or an engaging e-sports platform, we're a reliable partner
            to design a strong foundation for your business to run smoothly. Our
            team of experienced professionals takes the time to understand your
            unique ideas and then skillfully transforms them into fully
            functional products. From the start to the finish, we use the best
            methods and tools to ensure that the end result meets all your
            requirements.
          </p>
          <button className="ourConcept">Our Concept</button>
        </div>
      </div>

      {/* <div className="customContainer">
        <div className="reviews">
          <div className="reviewrows">
            <div className="reviewHead">
              What the People Thinks <br /> About Us
            </div>
            <div className="reviewcolumns">
              <rect className="whiteboxes">
                <div className="reviewerprofile">
                  <img className="profilep1" alt="pp1" src={profilepic1} />
                  <div>
                    <div className="namesformat">Sejal</div>
                    <div className="placesformat">Canada</div>
                  </div>
                </div>
                <div className="reviewtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </div>
              </rect>

              <rect className="whiteboxes">
                <div className="reviewerprofile">
                  <img className="profilep1" alt="pp1" src={profilepic1} />
                  <div>
                    <div className="namesformat"></div>
                    <div className="placesformat"></div>
                  </div>
                </div>
                <div className="reviewtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </div>
              </rect>

              <rect className="whiteboxes">
                <div className="reviewerprofile">
                  <img className="profilep1" alt="pp1" src={profilepic1} />
                  <div>
                    <div className="namesformat"></div>
                    <div className="placesformat"></div>
                  </div>
                </div>
                <div className="reviewtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </div>
              </rect>
            </div>
          </div>
        </div>
      </div> */}

      <div className="customContainer">
        <div className="projectidea">
          <div className="reviewHead">
            Creative project? Let's have <br /> a productive talk.
          </div>
          <form className="contactform">
            <div className="forminput">
              <div className="sec">
                <label className="labels">Name</label>
                <input className="inputlabel" type="text"></input>
              </div>

              <div className="sec">
                <label className="labels">Email</label>
                <input className="inputlabel" type="text"></input>
              </div>
            </div>

            <div className="descriptioninput">
              <label className="labels">Hello I am Interested In..</label>
              <input className="inputlabel" type="text"></input>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("msg sent");
              }}
              className="ourConcept"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
