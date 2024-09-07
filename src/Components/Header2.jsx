import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { usercontext } from '../utils/usercontext'
import carts from "../utils/carts.png"

const Header2 = () => {
  const{value1}=useContext(usercontext)
  return (
    <div className=' md:flex justify-between bg-slate-50 border border-slate-100'>
    <h1 className='text-center text-xl m-6 font-bold text-black'>E A R T H S T O R E</h1>
    <ul className='flex m-2 mr-6 justify-center'>
      <Link to={"/"}><li className='m-2 md:m-4 text-md text-black hover:text-orange-400 hover:font-bold'>HOME</li></Link>
      <Link to={"/about"} ><li className='m-2 md:m-4 text-md text-black hover:text-orange-400 hover:font-bold'>ABOUT</li></Link>
      <Link to={"/shop"}><li className='m-2 md:m-4 text-md text-black hover:text-orange-400 hover:font-bold'>SHOP</li></Link>
      <Link to={"/contact"}><li className='m-2 md:m-4 text-md text-black hover:text-orange-400 hover:font-bold'>CONTACT</li></Link>
      <Link to={"/cart"}><li className='m-2 md:m-4 text-md text-black hover:text-orange-400 hover:font-bold'><div className='relative inline-block'><p className='absolute -top-3 -right-2 text-sm bg-green-400 rounded-xl w-5 h-5 text-center'>{value1}</p><img src={carts}  alt="" className='w-8'/></div></li></Link>
      
    </ul>
  </div>
  )
}

export default Header2