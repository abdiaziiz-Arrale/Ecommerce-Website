import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,button,
    Typography,
  } from "@material-tailwind/react";
function Product() {
  const [data,setdata]=useState([])
    useEffect(()=>{
      
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setdata(json))
    },[])

  return (
    <div>
        <h1 className='text-center'>OurProduct</h1>
        <div className="flex items-center space-x-32 bg-slate-800 mx-10 h-8  justify-between">
            <h1 className='text-white'>{data.length} product</h1>
            <select >
                <option >Reletive Product</option>
                <option >Product [A-Z]</option>
            </select>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 space-x-6 px-6 '>
     
      {data.map(item => (
        <div key={item.id.value} className="">
           <Card className="w-72 mt-8 mb-32 h-96">
      <CardHeader  className="relative h-56 mt-6">
        <img
          src={item.image}
          alt="img-blur-shadow"
          className=" w-full hover:transition hover:duration-300 hover:transform"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {item.category}
        </Typography>
        <Typography>
         {item.title}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small" className="mx-32"> ${item.price}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
         
        </Typography>
      </CardFooter>
        <div className="py-6 flex justify-center items-center">
        <button className='mt-4 ml-10  hover:border-black bg-orange-500 hover:text-orange-500 shadow-xl hover:bg-gray-300 px-4 py-2 rounded'>Order</button>
        </div>
    </Card>
        </div>
      ))}
    </div>
        </div>
  )
}

export default Product