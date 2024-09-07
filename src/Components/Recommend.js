import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Recommend = () => {
  
  const [recommend,setRecommend]=useState([]);
  const [loadrecommend,setLoadRecommend]=useState(8)
  
   useEffect(()=>{
    fetchRecommend();
   },[loadrecommend])

   const fetchRecommend= async()=>{
    const data= await fetch("https://dummyjson.com/products");
    const data2=await fetch("https://fakestoreapi.com/products");
    const json= await data.json();
    const json2=await data2.json();
    setRecommend(json.products.concat(json2).slice(0,loadrecommend));
    // setLoadRecommend(recommend.concat(json2).slice(0,9))
    console.log(json)
   }

  return (
    <div className='md:-mt-48'>
     <h1 className='font-bold text-center md:text-left text-4xl text-orange-500 m-8'>Recommended</h1>
    <div className='flex flex-wrap justify-center'>
        {
          recommend.map((product)=>{
            return <Link to={'/productdetails'} state={product} key={product.id}> <ProductCard image={product.thumbnail || product.image} name={product.title} price={product.price} /></Link>
          })
        }
    </div>
    <div className='text-center m-4'>
    <button className='bg-orange-200 text-orange-500 font-bold p-4 hover:bg-orange-500 hover:text-orange-200 mx-auto' onClick={()=>{
     setLoadRecommend(loadrecommend+4);
    }}>LOAD MORE</button>
    </div>
  </div>
  )
}

export default Recommend