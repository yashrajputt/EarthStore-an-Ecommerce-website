import React from 'react'
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
    <div className=' flex justify-between bg-slate-50 border border-slate-100'>
    <h1 className=' text-xl m-6 font-bold text-black'>E A R T H S T O R E</h1>
    <ul className='flex m-2 mr-6'>
      <Link to={"/"}><li className='m-4 text-md text-black hover:text-orange-400 hover:font-bold'>HOME</li></Link>
      <Link to={"/about"} ><li className='m-4 text-md text-black hover:text-orange-400 hover:font-bold'>ABOUT</li></Link>
      <Link to={"/shop"}><li className='m-4 text-md text-black hover:text-orange-400 hover:font-bold'>SHOP</li></Link>
      <Link to={"/contact"}><li className='m-4 text-md text-black hover:text-orange-400 hover:font-bold'>CONTACT</li></Link>
      <Link to={"/cart"}><li className='m-4 text-md text-black hover:text-orange-400 hover:font-bold'>CART</li></Link>
    </ul>
  </div>
  )
}

export default Header2