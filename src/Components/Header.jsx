import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='md:flex justify-between'>
      <h1 className=' text-xl font-bold m-4 text-center text-white md:m-6'>E A R T H S T O R E</h1>
      <ul className='flex-none m-2 md:mr-6 flex'>
        <Link to={"/"}><li className='m-2 text-md text-white hover:text-orange-400 hover:font-bold sm:m-4'>HOME</li></Link>
        <Link to={"/about"} ><li className='m-2 text-md text-white hover:text-orange-400 hover:font-bold sm:m-4'>ABOUT</li></Link>
        <Link to={"/shop"}><li className='m-2 text-md text-white hover:text-orange-400 hover:font-bold sm:m-4'>SHOP</li></Link>
        <Link to={"/contact"}><li className='m-2 text-md text-white hover:text-orange-400 hover:font-bold sm:m-4'>CONTACT</li></Link>
        <Link to={"/cart"}><li className='m-2 text-md text-white hover:text-orange-400 hover:font-bold sm:m-4'>CART</li></Link>
      </ul>
    </div>
  )
}

export default Header