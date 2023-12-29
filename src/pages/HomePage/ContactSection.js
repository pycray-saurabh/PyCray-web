import React from 'react'

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
     <div className='emailsection'>
       <div className='card'>
         <svg
           className='card-img'
           xmlns='http://www.w3.org/2000/svg'
           width='88'
           height='84'
           viewBox='0 0 88 84'
           fill='none'
         >
           <g filter='url(#filter0_d_258_19985)'>
             <ellipse
               cx='43.7725'
               cy='41.9821'
               rx='32.7725'
               ry='30.9821'
               fill='#25AAE1'
               fill-opacity='0.7'
             />
             <path
               d='M32.0605 32.1973H57.6171V52.1136H32.0605V32.1973Z'
               stroke='#FFF2F2'
               stroke-width='1.88'
               stroke-linecap='round'
               stroke-linejoin='round'
             />
             <path
               d='M33.082 33.2451L44.8381 43.7274L56.5941 33.2451'
               stroke='#FFF2F2'
               stroke-width='1.88'
               stroke-linecap='round'
               stroke-linejoin='round'
             />
           </g>
           <defs>
             <filter
               id='filter0_d_258_19985'
               x='0'
               y='0'
               width='87.5449'
               height='83.9639'
               filterUnits='userSpaceOnUse'
               color-interpolation-filters='sRGB'
             >
               <feFlood flood-opacity='0' result='BackgroundImageFix' />
               <feColorMatrix
                 in='SourceAlpha'
                 type='matrix'
                 values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                 result='hardAlpha'
               />
               <feOffset />
               <feGaussianBlur stdDeviation='5.5' />
               <feComposite in2='hardAlpha' operator='out' />
               <feColorMatrix
                 type='matrix'
                 values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
               />
               <feBlend
                 mode='normal'
                 in2='BackgroundImageFix'
                 result='effect1_dropShadow_258_19985'
               />
               <feBlend
                 mode='normal'
                 in='SourceGraphic'
                 in2='effect1_dropShadow_258_19985'
                 result='shape'
               />
             </filter>
           </defs>
         </svg>
         <div className='card-content'>
           <h2>Email Us</h2>
           <p>
             Ask us a question by email and we will respond within a few
             days.
           </p>
           <p
             className='blueText'
             onClick={() => {
               window.location.href = '/contact-us';
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
       {/* <img className="emailus" alt="clpic" src={emailus} />
       <Link to="/contact-us"><button className="emailbutton"></button></Link> */}
     </div>

     <div className='dropinsection'>
       <div className='card'>
         <svg
           className='card-img'
           xmlns='http://www.w3.org/2000/svg'
           width='88'
           height='84'
           viewBox='0 0 88 84'
           fill='none'
         >
           <g filter='url(#filter0_d_258_19982)'>
             <ellipse
               cx='43.7725'
               cy='41.9821'
               rx='32.7725'
               ry='30.9821'
               fill='#25AAE1'
               fill-opacity='0.7'
             />
             <path
               d='M52.3631 27.424L32.3334 38.085C30.0225 39.3289 30.7928 43.2377 33.2579 43.2377H41.7321V53.0104C41.7321 55.8531 45.1216 56.742 46.2002 54.0765L55.4448 30.9778C56.2151 28.8451 54.212 26.5351 52.3631 27.424Z'
               fill='white'
             />
           </g>
           <defs>
             <filter
               id='filter0_d_258_19982'
               x='0'
               y='0'
               width='87.5449'
               height='83.9639'
               filterUnits='userSpaceOnUse'
               color-interpolation-filters='sRGB'
             >
               <feFlood flood-opacity='0' result='BackgroundImageFix' />
               <feColorMatrix
                 in='SourceAlpha'
                 type='matrix'
                 values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                 result='hardAlpha'
               />
               <feOffset />
               <feGaussianBlur stdDeviation='5.5' />
               <feComposite in2='hardAlpha' operator='out' />
               <feColorMatrix
                 type='matrix'
                 values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
               />
               <feBlend
                 mode='normal'
                 in2='BackgroundImageFix'
                 result='effect1_dropShadow_258_19982'
               />
               <feBlend
                 mode='normal'
                 in='SourceGraphic'
                 in2='effect1_dropShadow_258_19982'
                 result='shape'
               />
             </filter>
           </defs>
         </svg>
         <div className='card-content'>
           <h2>Drop By</h2>
           <p>
             You can meet us at our office and discuss the details of your
             question.
           </p>
           <p
             className='blueText'
             onClick={() => {
               window.open(
                 'https://www.google.com/maps/place/PyCray+Technologies+Private+Limited/@28.5851774,77.310305,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5816bd07aad:0xb2833d276ff0eb4c!8m2!3d28.5851727!4d77.3128799!16s%2Fg%2F11khqfwlfp?entry=ttu'
               );
             }}
           >
             Get directions
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

     <div className='booksection'>
       <div className='card'>
         <svg
           className='card-img'
           width='88'
           height='84'
           viewBox='0 0 88 84'
           fill='none'
           xmlns='http://www.w3.org/2000/svg'
         >
           <g filter='url(#filter0_d_258_19990)'>
             <ellipse
               cx='43.7725'
               cy='41.9821'
               rx='32.7725'
               ry='30.9821'
               fill='#25AAE1'
               fill-opacity='0.7'
             />
             <path
               d='M54.2891 36.8125H33.5859C33.2624 36.8125 33 36.5501 33 36.2266V34.4688C33 33.1743 34.0493 32.125 35.3438 32.125H37.6875V29.5859C37.6875 29.2624 37.9499 29 38.2734 29H40.2266C40.5501 29 40.8125 29.2624 40.8125 29.5859V32.125H47.0625V29.5859C47.0625 29.2624 47.3249 29 47.6484 29H49.6016C49.9251 29 50.1875 29.2624 50.1875 29.5859V32.125H52.5312C53.8257 32.125 54.875 33.1743 54.875 34.4688V36.2266C54.875 36.5501 54.6126 36.8125 54.2891 36.8125ZM33.5859 38.375H54.2891C54.6126 38.375 54.875 38.6374 54.875 38.9609V51.6562C54.875 52.9507 53.8257 54 52.5312 54H35.3438C34.0493 54 33 52.9507 33 51.6562V38.9609C33 38.6374 33.2624 38.375 33.5859 38.375ZM49.8602 43.0599L48.4847 41.6733C48.2568 41.4436 47.8858 41.442 47.6561 41.67L42.4785 46.8059L40.2334 44.5426C40.0055 44.3129 39.6345 44.3114 39.4047 44.5393L38.0182 45.9148C37.7884 46.1427 37.7869 46.5137 38.0148 46.7434L42.0481 50.8093C42.276 51.039 42.647 51.0405 42.8767 50.8126L49.8568 43.8885C50.0866 43.6606 50.0881 43.2896 49.8602 43.0599Z'
               fill='white'
             />
           </g>
           <defs>
             <filter
               id='filter0_d_258_19990'
               x='0'
               y='0'
               width='87.5449'
               height='83.9639'
               filterUnits='userSpaceOnUse'
               color-interpolation-filters='sRGB'
             >
               <feFlood flood-opacity='0' result='BackgroundImageFix' />
               <feColorMatrix
                 in='SourceAlpha'
                 type='matrix'
                 values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                 result='hardAlpha'
               />
               <feOffset />
               <feGaussianBlur stdDeviation='5.5' />
               <feComposite in2='hardAlpha' operator='out' />
               <feColorMatrix
                 type='matrix'
                 values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
               />
               <feBlend
                 mode='normal'
                 in2='BackgroundImageFix'
                 result='effect1_dropShadow_258_19990'
               />
               <feBlend
                 mode='normal'
                 in='SourceGraphic'
                 in2='effect1_dropShadow_258_19990'
                 result='shape'
               />
             </filter>
           </defs>
         </svg>
         <div className='card-content'>
           <h2>Book a consultation</h2>
           <p>
             Expert Tech Insights at Your Fingertips: Book Now, It's Free!
           </p>
           <p
             className='blueText'
             onClick={() => {
               window.location.href = '/contact-us';
             }}
           >
             Book Now
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
   </div>
 </div>
  )
}

export default ContactSection