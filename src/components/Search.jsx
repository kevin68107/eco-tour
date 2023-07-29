// import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
           <div>
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
            <p className='py-4'>Discover the breathtaking beauty of diverse landscapes, from the savannahs 
                teeming with wildlife to the pristine beaches with crystal-clear waters. Immerse yourself 
                in vibrant cultures, indulge in authentic cuisine, and witness mesmerizing traditions. Uncover 
                the magic of Africa's iconic landmarks, hidden gems, and warm hospitality. Start your unforgettable 
                adventure at www.ExploreAfricaTours.com today!</p>
        </div> 
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <RiCustomerService2Fill size={50}/>
                </button>
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>Our team is always ready and available 7 days a week.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                <MdOutlineTravelExplore size={50}/>
                </button>
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>Our team is always ready and available 7 days a week.</p>
                </div>
            </div>
        </div>
        </div>

        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 Hours LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form action="">
                <div>
                    <label>Destination</label>
                    <select>
                        <option></option>
                    </select>
                </div>
            </form>
        </div>
        
        
    </div>
  )
}

export default Search