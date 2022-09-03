import React from 'react'
import { AiOutlineGoogle,AiFillLinkedin } from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter,BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <div>
      <div className="bg-gray-900 text-white">
<div className="flex justify-center items-center gap-4 ">
  <BsTwitter className='h-20'/>
  <FaFacebook/>
  <BsInstagram/>
  <AiOutlineGoogle/>
  <AiFillLinkedin/>
</div>
<div className="flex space-x-6 md:mx-80 mt-4">
  <h1 className='text-white font-serif'>Singup For Newletter please</h1>
  <input type="text" name="" className='ring-2  focus:ring-2 h-8 md:w-80' />
  <button className='px-4 py-1 border-2 border-white rounded-md text-white'>Subscribe
    
  </button>
</div>
<div className="mt-10">
  <p className=' md:mx-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, accusamus fugit. Itaque quae ex odit vitae quod? Sapiente, nisi. Vitae?</p>
  <p className='md:mx-44'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni saepe esse,!</p></div>
      </div>
      <div className="bg-gray-900 grid grid-cols-2 md:grid-cols-4 text-white gap-44 space-y-4">
        <div className="">
          <h1 className='text-white font-medium border-b-2 text-center'>    About Componey</h1>
          <p className='mx-4'>Ecommerce kani waxa kaa saacidaya inaad si fudud adoo gurigaaga jooga aaad ka dhax adeegan kartid suuqa online ka ah adigoo biilkaga ku bixin karra qaab online helayana Delivery Bilaash ah</p>
        </div>
  <div className="space-y-4">
  <h1 className='text-white font-medium border-b-2 text-center'>    Help&FAQs</h1>
  <div className="text-center space-y-4">
  <p>online ordering</p>
  <p>Billing</p>
  <p>Shoping</p>
       </div>
  </div>
  <div className="space-y-4">
  <h1 className='text-white font-medium border-b-2 text-center'>Recent Activity</h1>
  <div className="text-center space-y-4">
  <p>My Account</p>
  <p>Account status</p>
  <p>Shoping</p>
       </div>
  </div>
  <div className="space-y-4">
  <h1 className='text-white font-medium border-b-2 text-center'> Menu</h1>
  <div className="text-center space-y-4 ">
  <p>Home</p>
  <p>About</p>
  <p>Products</p>
       </div>
  </div>

      </div>
        <div className="bg-black w-full text-center text-white font-sans font-semibold h-12">
            <div className="">
                <h1 className='p-2'> © 2021 Copyright: Abdiaziiz Arrale</h1>
            </div>
            
        </div>
    
    </div>
  )
}

export default Footer