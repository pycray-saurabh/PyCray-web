import React from 'react'
import clp1 from '../../assets/image-57.png';
import clp2 from '../../assets/image-56.png';
import clp3 from '../../assets/image-59.png';
import clp4 from '../../assets/image-58.png';
const FeaturedClientsSection = () => {
  return (
   <div className='clientsh'>
   <div>
     <h1 className='our-fetaured-clients'>Our Featured Clients</h1>
     <svg
       className='rect'
       width='73'
       height='7'
       viewBox='0 0 73 7'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
     >
       <rect width='73' height='7' rx='2' fill='#0C67B4' />
     </svg>
   </div>

   <div className='clientBox'>
     <div className='clientLogos'>
       <img className='p1' alt='i1' src={clp1} />
       <img className='p2' alt='i2' src={clp2} />
       <img className='p3' alt='i3' src={clp3} />
       <img className='p4' alt='i4' src={clp4} />
     </div>
   </div>
 </div>
  )
}

export default FeaturedClientsSection