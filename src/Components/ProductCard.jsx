import React from 'react'

const ProductCard = (props) => {
  const {image,name,price}=props;
  
  return (
    <div className='border border-orange-50 w-72 p-5 m-8 bg-orange-100 rounded-xl hover:border hover:border-orange-400 shadow-lg'><img src={image} alt="" />
    <div className='text-center m-3'>
      <h1 className='text-lg m-2'>{name}</h1>
      <p className='font-bold '>{price}</p>
    </div>
    </div>
  )
}

export default ProductCard