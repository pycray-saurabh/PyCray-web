import React from 'react'
import deliv from '../../assets/deliveryProcess.png';


const DeliveryProcessSection = () => {
  return (
   <div className='deliveryProcess'>
   <div className='tboxes'>
     <h1 className='leave-a-message'>Delivery Process</h1>
     <svg
       className='delivUnderline'
       width='73'
       height='7'
       viewBox='0 0 73 7'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
     >
       <rect width='73' height='7' rx='2' fill='#0C67B4' />
     </svg>
     <p className='contact-us-if-you'>
       Ensure successful Go LIVE with our streamlines delivery process
     </p>
   </div>

   <div className='deliveryPic'>
     <img className='deliveryProcessPic' alt='dpic' src={deliv} />
   </div>
 </div>
  )
}

export default DeliveryProcessSection