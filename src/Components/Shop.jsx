import React from 'react'
import ProductCard from './ProductCard';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const Shop = () => {
  
    const [shop,setShop]=useState([]);
    const[search,setSearch]=useState([]);
    
     useEffect(()=>{
      fetchRecommend();
     },[])
  
     const fetchRecommend= async()=>{
      const data= await fetch("https://dummyjson.com/products");
      const data2=await fetch("https://fakestoreapi.com/products");
      const json= await data.json();
      const json2=await data2.json();
      setShop(json.products.concat(json2));
      setSearch(json.products.concat(json2));
     }

    return (
    
    <div>
    <div className='text-center m-6'>
    <input type="text" placeholder='Search products' className='w-72 border p-2 rounded-xl' id='search' />
    <button className='bg-orange-400 hover:bg-orange-600 text-white p-2 w-24 rounded-xl m-3 md:m-0' onClick={()=>{
      let x=document.getElementById("search").value.toLowerCase();
      const searchArray=shop.filter((product)=>{
        return product.title.toLowerCase().includes(x);
      })
      setSearch(searchArray);

    }}>Search</button>
    </div>
    <div className='text-center'>
        <h1 className=' font-bold text-lg text-slate-500'>Categories</h1>
        <button className='bg-orange-400 p-2 rounded-2xl m-3 w-24 text-white hover:bg-orange-600' onClick={()=>{
          const newArr= shop.filter((product)=>{
              return product.category.includes('jel')
          })
          setSearch(newArr);
        }}>Jewellery</button>
        <button className='bg-orange-400 p-2 rounded-2xl m-3 w-24 text-white hover:bg-orange-600' onClick={()=>{
          const newArr= shop.filter((product)=>{
              return product.category.includes('clot')
          })
          setSearch(newArr);
        }}>Clothes</button>
        <button className='bg-orange-400 p-2 rounded-2xl m-3 w-24 text-white hover:bg-orange-600' onClick={()=>{
          const newArr= shop.filter((product)=>{
              return product.category.includes('groceries')
          })
          setSearch(newArr);
        }}>Groceries</button>
        <button className='bg-orange-400 p-2 rounded-2xl m-3 w-24 text-white hover:bg-orange-600'onClick={()=>{
          const newArr= shop.filter((product)=>{
              return product.category.includes('fur')
          })
          setSearch(newArr);
        }}>Furniture</button>
        <button className='bg-orange-400 p-2 rounded-2xl m-3 w-24 text-white hover:bg-orange-600'onClick={()=>{
          const newArr= shop.filter((product)=>{
              return product.category.includes('beauty')
          })
          setSearch(newArr);
        }}>Beauty</button>
        <button className='bg-orange-400 p-2 rounded-2xl m-3 w-24 text-white hover:bg-orange-600'onClick={()=>{
          const newArr= shop.filter((product)=>{
              return product.category.includes('frag')
          })
          setSearch(newArr);
        }}>Fragnances</button>
        <button className='bg-orange-400 p-2 rounded-2xl m-3 w-24 text-white hover:bg-orange-600'onClick={()=>{
          const newArr= shop.filter((product)=>{
              return product.category.includes('elec')
          })
          setSearch(newArr);
        }}>Electronics</button>
    </div>
    <h1 className='text-4xl font-bold text-orange-500 m-6 ml-9'>Shop</h1>

    {
      search.length!=0?
    <div className='flex flex-wrap m-6 justify-center'>
        {
          search.map((product)=>{
           return <Link to={'/productdetails'} state={product}> <ProductCard image={product.thumbnail || product.image} name={product.title} price={product.price} /></Link>
        })
        }
    </div>:
    <div>
    <h1>Oops!! there is no product.</h1>
  </div>
    }
    </div>
    
  )
  

}

export default Shop