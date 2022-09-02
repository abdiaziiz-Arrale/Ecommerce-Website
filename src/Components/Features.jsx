import React from 'react'
import bagimage from '../assets/bag.png'
import caimage from '../assets/ca.png'
import cartimage from '../assets/garan.webp'
import dolimage from '../assets/suudh.webp'
function Features() {
  return (
    <div>
        <h1 className='text-center font-mono text-xl'>Features</h1>
        <div className="grid grid-cols-2 md:grid-cols-4  mt-4 gap-4">
<div className=" items-center border-2 mx-14 px-10 w-36 py-2 border-black hover:transition-all duration-300 cursor-pointer hover:border-gray-300 rounded-full">
    <img src={bagimage} className="h-20 p-2" alt="" />
    <h1 className='font-semibold'>Bugs</h1>
</div>
<div className=" items-center border-2 mx-14 px-10 w-36 py-2 border-black hover:transition-all duration-300 cursor-pointer hover:border-gray-300 rounded-full">
    <img src={caimage} className="h-20 p-2" alt="" />
    <h1 className='font-semibold'>currence</h1>
</div>
<div className=" items-center border-2 mx-14 px-10 w-36 py-2 border-black hover:transition-all duration-300 cursor-pointer hover:border-gray-300 rounded-full">
    <img src={cartimage} className="h-20 p-2" alt="" />
    <h1 className='font-semibold'>shaadh</h1>
</div>
<div className=" items-center border-2 mx-14 px-10 w-36 py-2 border-black hover:transition-all duration-300 cursor-pointer hover:border-gray-300 rounded-full">
    <img src={dolimage} className="h-20 p-2" alt="" />
    <h1 className='font-semibold'>Suudh</h1>
</div>
</div>
    </div>
  )
}

export default Features