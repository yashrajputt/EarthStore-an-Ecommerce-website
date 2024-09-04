import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
  
  const location=useLocation();
  const state=location.state;
  const [quantity,setQuantity]=useState(0);
  
  return (
    <div className='flex m-32 bg-orange-100 ml-60 mr-60 border border-orange-300 shadow-lg'>
        <div className='m-6'>
            <img src={state.thumbnail || state.image} alt="" className=' w-96'/>
        </div>
        <div className='ml-10 m-10'>
            <h1 className='font-bold text-2xl m-3'>{state.title}</h1>
            <h2 className='text-xl font-bold m-3 text-slate-500'>{state.price}</h2>
            <p className='text-lg m-3'>{state.description}</p>
            <div className='flex m-3 mt-8'>
            <button className='border text-2xl w-10 border-gray-400' onClick={()=>{
            (quantity>0)?setQuantity(quantity-1):setQuantity(0);
            }}>-</button>
            <p className='border text-xl w-10 border-gray-400 pl-3' id='number'>{quantity}</p>
            <button className='border text-2xl w-10 border-gray-400' onClick={()=>{
              setQuantity(quantity+1);
            }}>+</button>
            <button className='bg-orange-400 text-white ml-6 pl-4 pr-4 hover:bg-orange-700'>ADD TO CART</button>
            </div>
            
        </div>
    </div>
  )
}

export default ProductDetails