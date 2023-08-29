import React from 'react'
import '../styles/About.css'
import aboutpic from '../assets/aboutpic.svg'
import aboutcard from '../assets/aboutuscard.svg'
import profilepic1 from '../assets/profilepic1.svg'

function About() {
  return (
    <div className='aboutpage'>
      <div className='aboutsec'>
        <img className="aboutpic" alt="aspic" src={aboutpic} />
        <div className='whiterect'>
          <div className="aboutustext">ABOUT US</div>
          <div className="homeandabout">Home / About</div>
        </div>
      </div>

      <div className='whatwedo'>
        <img className="aboutcardpic" alt="acpic" src={aboutcard} />
        <div className='whatwedorows'>
          <div className='title'>What We Do</div>
          <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            doloreLorem ipsum dolor sit amet, consectetur adipiscing</p>
          <button>Our Concept</button>
        </div>
      </div>

      <div className='reviews'>
        <div className='reviewrows'>
          <div className='title'>What the People Thinks About Us</div>
          <div className='reviewcolumns'>
            <rect className='whiteboxes'>
              <div className='reviewerprofile'>
                <img className="profilep1" alt="pp1" src={profilepic1} />
                <div>
                  <div className='namesformat'>Sejal</div>
                  <div className='placesformat'>Canada</div>
                </div>
              </div>
              <div className='reviewtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </div>
            </rect>

            <rect className='whiteboxes'>
              <div className='reviewerprofile'>
                <img className="profilep1" alt="pp1" src={profilepic1} />
                <div>
                  <div className='namesformat'></div>
                  <div className='placesformat'></div>
                </div>
              </div>
              <div className='reviewtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </div>
            </rect>

            <rect className='whiteboxes'>
              <div className='reviewerprofile'>
                <img className="profilep1" alt="pp1" src={profilepic1} />
                <div>
                  <div className='namesformat'></div>
                  <div className='placesformat'></div>
                </div>
              </div>
              <div className='reviewtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </div>
            </rect>
          </div>
        </div>
      </div>

      <div className='projectidea'>
        <div className='title'>Creative project? Let's have a productive talk.</div>
        <form className='contactform'>
          <div className='forminput'>
            <div className='sec'>
              <label className='labels'>
                Name
              </label>
              <input className='inputlabel' type='text' ></input>
            </div>

            <div className='sec'>
              <label className='labels'>
                Email
              </label>
              <input className='inputlabel' type='text' ></input>
            </div>
          </div>

          <div className='descriptioninput'>
            <label className='labels'>
              Hello I am Interested In..
            </label>
            <input className='inputlabel' type='text' ></input>
          </div>

          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default About
