import React from 'react'
import gtpic from '../assets/getintouch.svg'
import bropic from '../assets/contactusbro.svg'
import '../styles/ContactUs.css'

function ContactUs() {
  return (
    <div className='contactuspage'>
      <div className='getintouch'>
        <img className="gtpic" alt="gpic" src={gtpic} />
        <div className='whiterect'>
          <div className="gettouchtext">GET IN TOUCH</div>
          <div className="homeandcontact">Home / Contact Us</div>
        </div>

      </div>

      <div className='contactcolumns'>
        <div className='contactrows'>
          <div className='contacttext'>
            <div className='title'>Contact Us</div>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <form className='contactform'>
            <div className='forminput'>
              <div className='sec'>
                <label className='labels'>
                  Name
                  <span className="span">*</span>
                </label>
                <input className='inputlabel' defaultValue={'Sejal'} type='text' required></input>
              </div>

              <div className='sec'>
                <label className='labels'>
                  Email Address
                  <span className="span">*</span>
                </label>
                <input className='inputlabel' defaultValue={'yes@company.com'} type='text' required></input>
              </div>

              <div className='sec'>
                <label className='labels'>
                  Phone
                  <span className="span">*</span>
                </label>
                <input className='inputlabel' defaultValue={'123456789'} type='text' required></input>
              </div>

              <div className='sec'>
                <label className='labels'>
                  Date*
                  {/* <span className="span">*</span> */}
                </label>
                <input className='inputlabel' defaultValue={'mm - dd - yyyy'} type='text' required></input>
              </div>
            </div>

            <div className='descriptioninput'>
              <label className='labels'>
                Project Description
                <span className="span">*</span>
              </label>
              <input className='inputlabel' type='text' required></input>
              <div>checkbox here</div>
            </div>

            <button>this button</button>
          </form>

        </div>

        <img className="bropic" alt="bpic" src={bropic} />
      </div>

    </div>
  )
}

export default ContactUs
