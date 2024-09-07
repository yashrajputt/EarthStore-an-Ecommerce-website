import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {usercontext} from '../utils/usercontext'
import carts from "../utils/carts.png"
const Header = () => {
  const{value1}=useContext(usercontext)
  return (
    <div className='md:flex justify-between'>
      <h1 className=' p-8 md:p-0 text-xl font-bold text-center text-white md:m-6'>E A R T H S T O R E</h1>
      <ul className='flex md:flex-row items-center justify-center md:mr-6 m'>
        <Link to={"/"}><li className='m-2 -mt-3 md:-mt-0 text-md text-white hover:text-orange-400 hover:font-bold md:m-4'>HOME</li></Link>
        <Link to={"/about"} ><li className='m-2 -mt-3 md:-mt-0 text-md text-white hover:text-orange-400 hover:font-bold md:m-4'>ABOUT</li></Link>
        <Link to={"/shop"}><li className='m-2 -mt-3 md:-mt-0 text-md text-white hover:text-orange-400 hover:font-bold md:m-4'>SHOP</li></Link>
        <Link to={"/contact"}><li className='m-2 -mt-3 md:-mt-0 text-md text-white hover:text-orange-400 hover:font-bold md:m-4'>CONTACT</li></Link>
        <Link to={"/cart"}><li className='m-2 md:m-4 text-md text-black hover:text-orange-400 hover:font-bold'><div className='relative inline-block'><p className='absolute -top-3 -right-2 text-sm bg-green-400 rounded-xl w-5 h-5 text-center'>{value1}</p><img src={carts}  alt="" className='w-8'/></div></li></Link>
        
      </ul>
    </div>
  )
}

export default Header