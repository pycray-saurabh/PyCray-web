import React from 'react';
import ContactSectionData from './ContactSectionData';
const ContactSection = () => {
  return (
    <div className='helpdiv'>
      <div className='helptitle'>
        <h1 className='we-re-here-to-help'>We’re here to help</h1>
      </div>

      <div className='helpunderline'>
        <div className='recunder' />
      </div>

      <div className='helptext'>
        <p className='contact-us-if-you'>
          Contact us. Our expert consultants will answer your queries and let
          you know the best way in which we can help you out
        </p>
      </div>

      <div className='helpbuttons'>
        {/*  */}
        {ContactSectionData.map((data) => {
          return (
            <div className='emailsection'>
              <div className='card'>
                {data.svg}
                <div className='card-content'>
                  <h2>{data.title}</h2>
                  <p>{data.para1}</p>
                  <p
                    className='blueText'
                    onClick={() => {
                      window.location.href = `${data.link}`;
                    }}
                  >
                    Leave a message
                    <svg
                      style={{ margin: '1vw' }}
                      width='21'
                      height='21'
                      viewBox='0 0 21 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M2.28064 11.747L16.6256 11.747L10.3526 18.023C10.1073 18.2566 9.96842 18.5807 9.96842 18.9195C9.96842 19.2583 10.1073 19.5823 10.3526 19.816C10.5863 20.0613 10.9103 20.2002 11.2491 20.2002C11.588 20.2002 11.912 20.0613 12.1456 19.816L20.4686 11.491C20.9818 10.9044 20.9818 10.0286 20.4686 9.44197L12.1436 1.11697C11.91 0.871613 11.586 0.732746 11.2471 0.732746C10.9083 0.732746 10.5843 0.871613 10.3506 1.11697H10.3506C10.1053 1.35064 9.96642 1.67465 9.96642 2.01347C9.96642 2.35229 10.1053 2.67631 10.3506 2.90997L16.6256 9.18497L2.28064 9.18497C1.9349 9.16401 1.59675 9.29223 1.35183 9.53715C1.1069 9.78208 0.97868 10.1202 0.999641 10.466C0.97868 10.8117 1.1069 11.1499 1.35182 11.3948C1.59675 11.6397 1.93489 11.7679 2.28064 11.747Z'
                        fill='#377DFF'
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
