import React from 'react'
import Header from './Header'

const Front = () => {
  return (
    <div className='bg-custom-image w-full md:bg-cover' style={{ backgroundImage: "url('https://images6.alphacoders.com/134/1345653.jpeg?hl=en-US')" }}>
        <Header/>
        <div className=' text-center md:m-56'>
            <h1 className=' text-5xl font-bold text-orange-200 mb-10 md:text-7xl '>E A R T H</h1>
            <p className=' text-4xl text-orange-500 mb-10'>M U L T I &nbsp;P U R P O S E &nbsp; &nbsp; S T O R E </p>
            <button className='bg-orange-200 text-orange-500 p-4  m-8 mb-32 font-bold hover:bg-orange-500 hover:text-orange-200'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Front