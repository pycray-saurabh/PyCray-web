import React from 'react'
import bolaMockup from '../../assets/bolaMockup.svg';

const CaseStudiesSection = ({handleButtonClick}) => {
  return (
   <div className='casestudies'>
   <div className='headline-supporting'>
     <h1 className='headline'>Case Studies</h1>
     <svg
       className='caseUnderline'
       width='73'
       height='7'
       viewBox='0 0 73 7'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
     >
       <rect width='73' height='7' rx='2' fill='#0C67B4' />
     </svg>
     <p className='subtitle'>
       Read about our success stories illustrating our expertise and
       client-focused solutions.
     </p>
   </div>

   <div className='casesbox'>
     <div className='casecolumns'>
       <div className='caseleftside'>
         <div className='laptopbackground'>
           <svg
             className='ltbg'
             viewBox='20 20 305 209.5'
             fill='none'
             xmlns='http://www.w3.org/2000/svg'
           > 
             <g filter='url(#filter0_d_264_20261)'>
               <path
                 d='M2 24C2 11.8497 11.8497 2 24 2H590C602.15 2 612 11.8497 612 24V399C612 411.15 602.15 421 590 421H24C11.8497 421 2 411.15 2 399V24Z'
                 fill='url(#paint0_linear_264_20261)'
                 fill-opacity='0.15'
                 shape-rendering='crispEdges'
               />
             </g>
             <defs>
               <filter
                 id='filter0_d_264_20261'
                 x='0'
                 y='0'
                 width='618'
                 height='427'
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
                 <feOffset dx='2' dy='2' />
                 <feGaussianBlur stdDeviation='2' />
                 <feComposite in2='hardAlpha' operator='out' />
                 <feColorMatrix
                   type='matrix'
                   values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                 />
                 <feBlend
                   mode='normal'
                   in2='BackgroundImageFix'
                   result='effect1_dropShadow_264_20261'
                 />
                 <feBlend
                   mode='normal'
                   in='SourceGraphic'
                   in2='effect1_dropShadow_264_20261'
                   result='shape'
                 />
               </filter>
               <linearGradient
                 id='paint0_linear_264_20261'
                 x1='42'
                 y1='39'
                 x2='561.5'
                 y2='402'
                 gradientUnits='userSpaceOnUse'
               >
                 <stop stop-color='#2A7FCE' />
                 <stop offset='1' stop-color='#393E45' />
               </linearGradient>
             </defs>
           </svg>
           <img className='ltpic' alt='lpic' src={bolaMockup} />
         </div>
       </div>

       <div className='caserightside'>
         <div className='caserows'>
           {/* <div className="datelabel">
             <div className="tw1">Case Study</div>
             <div className="september">SEPTEMBER 1, 2023</div>
           </div> */}

           <div className='casetext'>
             <h1 className='gestalt-psychology'>
               The Ride Sharing Platform
             </h1>
             <p className='text-wrapper10'>
               Bola approached us with a vision of creating a shared
               mobility platform tailored to aftercare travel needs. We
               worked closely with Bola to design and develop a
               user-friendly platform where individuals could effortlessly
               book seats for their journeys and share the
               itinerary/tickets with their friends. The result was a
               successful platform that not only connected users
               effectively but also improved post-procedure transportation
               options, fostering a sense of community and trust among its
               users.
             </p>
           </div>

           <div className='learnmorebuttondiv'>
             <button className='learnclicked' onClick={()=>handleButtonClick}>
               Learn more
             </button>

             <svg
               className='rarrow'
               width='20'
               height='20'
               viewBox='0 0 20 20'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
             >
               <path
                 d='M4.16602 10H14.9993M10.8327 5L15.2434 9.41074C15.5689 9.73618 15.5689 10.2638 15.2434 10.5893L10.8327 15'
                 stroke='#3884C4'
                 stroke-width='1.67'
                 stroke-linecap='round'
               />
             </svg>
           </div>

           <div className='casedividerline'>
             <svg
               width='451'
               height='1'
               viewBox='0 0 451 1'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
             >
               <line
                 y1='0.5'
                 x2='451'
                 y2='0.5'
                 stroke='#747474'
                 stroke-opacity='0.16'
               />
             </svg>
           </div>

           <div className='casebuttonwp'>
             <button
               className='all-case-study'
               onClick={()=>handleButtonClick}
             >
               &nbsp; All Case Study
             </button>
             <svg
               className='vector'
               width='14'
               height='14'
               viewBox='0 0 14 14'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
             >
               <path
                 d='M-2.90913e-07 7C-2.33376e-07 8.38447 0.390326 9.73785 1.12162 10.889C1.85291 12.0401 2.89233 12.9373 4.10843 13.4672C5.32453 13.997 6.66268 14.1356 7.95369 13.8655C9.24469 13.5954 10.4305 12.9287 11.3613 11.9497C12.2921 10.9708 12.9259 9.7235 13.1827 8.36563C13.4395 7.00776 13.3077 5.6003 12.804 4.32122C12.3003 3.04213 11.4472 1.94888 10.3528 1.17971C9.25833 0.410543 7.9716 -3.66497e-07 6.6553 -3.0598e-07C4.89124 0.00355793 3.20041 0.742199 1.95303 2.05418C0.70565 3.36617 0.0033823 5.14458 -2.90913e-07 7ZM6.23295 4.17981L8.79268 6.60288C8.84505 6.65333 8.88688 6.71469 8.91549 6.78305C8.9441 6.85142 8.95888 6.9253 8.95888 7C8.95888 7.0747 8.9441 7.14858 8.91549 7.21694C8.88688 7.28531 8.84505 7.34667 8.79268 7.39711L6.23295 9.82019C6.13227 9.91297 6.00105 9.9606 5.86739 9.95285C5.73374 9.9451 5.60828 9.88261 5.51791 9.77875C5.42753 9.67489 5.37943 9.53794 5.3839 9.39723C5.38837 9.25651 5.44506 9.12324 5.54182 9.02596L7.67919 7L5.54182 4.97404C5.49055 4.92679 5.44877 4.86925 5.41893 4.80479C5.38909 4.74034 5.37178 4.67026 5.36803 4.59868C5.36428 4.52709 5.37416 4.45544 5.39709 4.38793C5.42002 4.32041 5.45554 4.25839 5.50156 4.20551C5.54758 4.15262 5.60318 4.10993 5.66509 4.07995C5.727 4.04996 5.79399 4.03328 5.86211 4.03089C5.93024 4.0285 5.99813 4.04044 6.06181 4.06601C6.12549 4.09158 6.18367 4.13027 6.23295 4.17981Z'
                 fill='white'
               />
             </svg>
           </div>
         </div>
       </div>
     </div>

     {/* <div className="tag">
       <div className="overlap-group-wrapper">
         <div className="iview">
           <div className="tw1">Interview</div>
         </div>
       </div>
       <div className="september">SEPTEMBER 1, 2023</div>
     </div> */}

     {/* <div className='learnmore'>
       <button className="learnclicked" onClick={handleButtonClick}>
         Learn more
       </button>

       <svg className='rarrow' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M4.16602 10H14.9993M10.8327 5L15.2434 9.41074C15.5689 9.73618 15.5689 10.2638 15.2434 10.5893L10.8327 15" stroke="#3884C4" stroke-width="1.67" stroke-linecap="round" />
       </svg>
     </div> */}

     {/* <div className='dividerline'>
       <svg width="451" height="1" viewBox="0 0 451 1" fill="none" xmlns="http://www.w3.org/2000/svg">
         <line y1="0.5" x2="451" y2="0.5" stroke="#747474" stroke-opacity="0.16" />
       </svg>
     </div> */}

     {/* <div className="casebutton">
       <button className="all-case-study" onClick={handleButtonClick}>
         &nbsp; All Case Study
       </button>
       <svg className='vector' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M-2.90913e-07 7C-2.33376e-07 8.38447 0.390326 9.73785 1.12162 10.889C1.85291 12.0401 2.89233 12.9373 4.10843 13.4672C5.32453 13.997 6.66268 14.1356 7.95369 13.8655C9.24469 13.5954 10.4305 12.9287 11.3613 11.9497C12.2921 10.9708 12.9259 9.7235 13.1827 8.36563C13.4395 7.00776 13.3077 5.6003 12.804 4.32122C12.3003 3.04213 11.4472 1.94888 10.3528 1.17971C9.25833 0.410543 7.9716 -3.66497e-07 6.6553 -3.0598e-07C4.89124 0.00355793 3.20041 0.742199 1.95303 2.05418C0.70565 3.36617 0.0033823 5.14458 -2.90913e-07 7ZM6.23295 4.17981L8.79268 6.60288C8.84505 6.65333 8.88688 6.71469 8.91549 6.78305C8.9441 6.85142 8.95888 6.9253 8.95888 7C8.95888 7.0747 8.9441 7.14858 8.91549 7.21694C8.88688 7.28531 8.84505 7.34667 8.79268 7.39711L6.23295 9.82019C6.13227 9.91297 6.00105 9.9606 5.86739 9.95285C5.73374 9.9451 5.60828 9.88261 5.51791 9.77875C5.42753 9.67489 5.37943 9.53794 5.3839 9.39723C5.38837 9.25651 5.44506 9.12324 5.54182 9.02596L7.67919 7L5.54182 4.97404C5.49055 4.92679 5.44877 4.86925 5.41893 4.80479C5.38909 4.74034 5.37178 4.67026 5.36803 4.59868C5.36428 4.52709 5.37416 4.45544 5.39709 4.38793C5.42002 4.32041 5.45554 4.25839 5.50156 4.20551C5.54758 4.15262 5.60318 4.10993 5.66509 4.07995C5.727 4.04996 5.79399 4.03328 5.86211 4.03089C5.93024 4.0285 5.99813 4.04044 6.06181 4.06601C6.12549 4.09158 6.18367 4.13027 6.23295 4.17981Z" fill="white" />
       </svg>
     </div> */}

     {/* <div className="laptopbackground">
       <svg className="ltbg" viewBox="20 20 305 209.5" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g filter="url(#filter0_d_264_20261)">
           <path d="M2 24C2 11.8497 11.8497 2 24 2H590C602.15 2 612 11.8497 612 24V399C612 411.15 602.15 421 590 421H24C11.8497 421 2 411.15 2 399V24Z" fill="url(#paint0_linear_264_20261)" fill-opacity="0.15" shape-rendering="crispEdges" />
         </g>
         <defs>
           <filter id="filter0_d_264_20261" x="0" y="0" width="618" height="427" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
             <feFlood flood-opacity="0" result="BackgroundImageFix" />
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
             <feOffset dx="2" dy="2" />
             <feGaussianBlur stdDeviation="2" />
             <feComposite in2="hardAlpha" operator="out" />
             <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_264_20261" />
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_264_20261" result="shape" />
           </filter>
           <linearGradient id="paint0_linear_264_20261" x1="42" y1="39" x2="561.5" y2="402" gradientUnits="userSpaceOnUse">
             <stop stop-color="#2A7FCE" />
             <stop offset="1" stop-color="#393E45" />
           </linearGradient>
         </defs>
       </svg>

       <img className="ltpic" alt="lpic" src={laptopPic} />
     </div> */}
   </div>
 </div>
  )
}

export default CaseStudiesSection