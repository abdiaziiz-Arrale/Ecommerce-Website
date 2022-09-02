import React from 'react'
import { Link } from 'react-router-dom'
import homelogo from '../assets/homelogo.svg'
function Home() {
  return (

    <div className='flex items-center md:flex-row justify-between flex-col-reverse'>
       {/* left */}
<div className="space-x-6 md:w-1/2 md:mt-0 mx-56">
<h2 className='text-2xl'>New Product</h2>
<h1 className='text-3xl '>Flexible Chair</h1>
<p className='text-lg text-gray-500'>Ku soo dhawoow Ecommerce waxaad ka heli karta product Cusub oo ah ku wii ugu dambeeye caalamka qiimahooduna 
     oo ku raali galiya</p>
     <button className='mt-4 border-black bg-orange-500 hover:text-orange-500 shadow-xl hover:bg-gray-300 px-2 py-2 rounded'>
        <Link to="">Shop Now</Link>
     </button>
</div>
     {/* right */}
<div className="mx-44">
<img src={homelogo} alt="" className='w-96' />
</div>
    </div>
  )
}

export default Home