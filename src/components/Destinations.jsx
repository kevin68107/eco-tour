// import React from 'react'
import site1 from '../assets/kwamemesuem.webp';
import site2 from '../assets/botifalls.jpeg'
import site3 from '../assets/kakum.jpg'
import site4 from '../assets/view-from-shai-hills.jpg'
import site5 from '../assets/wilefalls.jpeg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-2'>On the GoldCoast Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={site1} alt="" />
        <img className='w-full h-full object-cover' src={site2} alt="" />
        <img className='w-full h-full object-cover' src={site3} alt="" />
        <img className='w-full h-full object-cover' src={site4} alt="" />
        <img className='w-full h-full object-cover' src={site5} alt="" />
      </div>
    </div>
  )
}

export default Destinations
