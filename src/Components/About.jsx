import React from 'react'
import aboutimage from '../assets/Rectangle-116.png'
function About() {
  return (
    <div>
        <h1 className='text-center font-mono font-bold text-2xl'>About Us

        </h1>
        <p className='font-serif p-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        
        <div className="flex justify-center">
            <img src={aboutimage} alt="" />
        </div>
        <h1 className='mx-6 font-mono font-bold text-2xl mt-4'>OUr Story

        </h1>
        <p className='font-serif p-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        
        <div className="flex justify-center">
 
        </div>
        </div>
  )
}

export default About