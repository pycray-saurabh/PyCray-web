import React from 'react'
import financial from '../../assets/financial.png';
import ecommerce from '../../assets/ecommerce.png';
import retail from '../../assets/retail.png';
import manufacturing from '../../assets/manufacturing.png';
import logistics from '../../assets/logistics.png';
import supplychain from '../../assets/supplychain.png';

const IndustriesSection = () => {
  return (
   <div className='industries'>
   <div className='industrytbox'>
     <div className='itboxes'>
       <h1 className='leave-a-message'>Industries</h1>

       <svg
         className='indusUnderline'
         width='73'
         height='7'
         viewBox='0 0 73 7'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
       >
         <rect width='73' height='7' rx='2' fill='#0C67B4' />
       </svg>

       <p className='contact-us-if-you'>
         PyCray has created substantial impact and gained expertise in
         different domains across industries.
       </p>
     </div>
   </div>

   <div className='industrycontainer'>
     <div className='industryDesktop'>
       <div className='industryRow row1'>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={financial} alt='financial' />
           </div>
           <p className='industryText'>Financial Services</p>
         </div>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={ecommerce} alt='ecommerce' />
           </div>
           <p className='industryText'>E-commerce</p>
         </div>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={retail} alt='retail' />
           </div>
           <p className='industryText'>Retail</p>
         </div>
       </div>

       <div className='industryRow row2'>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={manufacturing} alt='manufacturing' />
           </div>
           <p className='industryText'>Manufacturing</p>
         </div>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={logistics} alt='logistics' />
           </div>
           <p className='industryText'>Logistics</p>
         </div>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={supplychain} alt='supplychain' />
           </div>
           <p className='industryText'>Supply Chain</p>
         </div>
       </div>
     </div>

     <div className='industryMobile'>
       <div className='industryRow row1'>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={financial} alt='financial' />
           </div>
           <p className='industryText'>Financial Services</p>
         </div>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={ecommerce} alt='ecommerce' />
           </div>
           <p className='industryText'>E-commerce</p>
         </div>
       </div>

       <div className='industryRow row1'>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={retail} alt='retail' />
           </div>
           <p className='industryText'>Retail</p>
         </div>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={manufacturing} alt='manufacturing' />
           </div>
           <p className='industryText'>Manufacturing</p>
         </div>
       </div>

       <div className='industryRow row2'>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={logistics} alt='logistics' />
           </div>
           <p className='industryText'>Logistics</p>
         </div>
         <div className='industryBox'>
           <div className='industryImg'>
             <img src={supplychain} alt='supplychain' />
           </div>
           <p className='industryText'>Supply Chain</p>
         </div>
       </div>
     </div>
   </div>

   {/* <img className="industryPic" alt="ipic" src={indPic} /> */}
 </div>
  )
}

export default IndustriesSection