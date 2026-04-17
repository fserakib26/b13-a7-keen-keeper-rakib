import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#244d3f] text-white text-center pt-20 pb-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='space-y-5'>
                <h2 className='text-5xl'><span className='font-bold'>Keen</span>Keeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h3 className='font-bold text-2xl'>Social Links</h3>
                <div className='flex space-x-4 lg:items-start  items-center justify-center pb-2'>
                    <div className='bg-white rounded-full h-10 w-10 text-[#101727] flex justify-center items-center'>
                        <a href=""><FaInstagram/></a>
                    </div>
                    <div className='bg-white rounded-full h-10 w-10 text-[#101727] flex justify-center items-center'>
                        <a href=""><CiFacebook/></a>
                    </div>
                    <div className='bg-white rounded-full h-10 w-10 text-[#101727] flex justify-center items-center'>
                        <a href=""><FaXTwitter/> </a>
                    </div>                                                 
                </div>                   
                
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="divider before:bg-[#1a8862] after:bg-[#1a8862] text-[#1a8862]"></div>            
            </div>

            <div className='flex flex-col lg:flex-row justify-between text-[#fafafa]'>
                <div className='mb-6 lg:mb-0'>
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-10'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer