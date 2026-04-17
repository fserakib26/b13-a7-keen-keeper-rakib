import React from 'react'
import { IoAddSharp } from 'react-icons/io5'

const Banner = () => {
  return (
    <div className="hero pt-20 pb-10 max-w-7xl mx-auto">
        <div className="hero-content text-center flex-col">
            <div className="">
                <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                <p className="py-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>
                <button className="btn bg-[#244d3f] text-white"><IoAddSharp />Add a Friend</button>
            </div>

            <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 pt-6'>
                <div className='text-center border-2 border-gray-200 py-8 px-12  rounded-2xl shadow-xl'>
                    <h2 className='font-bold text-3xl text-[#244d3f]'>10</h2>
                    <p>Total Friends</p>
                </div>
                <div className='text-center border-2 border-gray-200 py-8 px-12  rounded-2xl shadow-xl'>
                    <h2 className='font-bold text-3xl text-[#244d3f]'>3</h2>
                    <p>On Track</p>
                </div>
                <div className='text-center border-2 border-gray-200 py-8 px-12  rounded-2xl shadow-xl'>
                    <h2 className='font-bold text-3xl text-[#244d3f]'>6</h2>
                    <p>Need Attention</p>
                </div>
                <div className='text-center border-2 border-gray-200 py-8 px-12  rounded-2xl shadow-xl'>
                    <h2 className='font-bold text-3xl text-[#244d3f]'>12</h2>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Banner