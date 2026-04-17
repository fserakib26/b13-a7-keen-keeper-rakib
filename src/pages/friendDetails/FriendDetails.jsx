import React, { use } from 'react'
import { FaArchive, FaVideo } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMdText } from 'react-icons/io'
import { MdDeleteForever, MdOutlineSnooze } from 'react-icons/md'
import { useLoaderData, useParams } from 'react-router'



const FriendDetails = () => {
    const {id} = useParams()
    const friends = useLoaderData()
    const expectedFriend = friends.find(friend=> friend.id === Number(id));
    const statusColors = {
    "on-track": "bg-[#244d3f] text-white",
    "overdue": "bg-[#ef4444] text-white",
    "almost due": "bg-[#efad44] text-white"    
    };
        
  return (
    <div className='flex flex-col md:flex-row lg:flex-row  max-w-7xl mx-auto'>
        <div className='w-sm flex flex-col justify-center items-center mx-auto'>
            <div className='text-center p-5 border-2 border-gray-100 shadow-md rounded-2xl my-5 space-y-3 w-full'>
                <img className='mx-auto rounded-full w-30 h-30' src={expectedFriend.picture} alt="" />
                <h2>{expectedFriend.name}</h2>
                <span className={`px-3 py-1 rounded-full 
                ${statusColors[expectedFriend.status] || "bg-gray-400 text-white"}
                `}
                >
                    {expectedFriend.status}
                </span>
                <br />
                <div className='flex justify-center items-center mt-4'>
                {expectedFriend.tags.map((tag)=> (
                    <p className='bg-[#cbfadb] text-[#244d3f] rounded-full w-fit px-2 mr-2'>{tag}</p>
                ))}
                </div>
               <div className='space-y-3'>
                    <p className='font-bold text-sm'>"{expectedFriend.bio}"</p>
                    <p>Preferred: {expectedFriend.email}</p>
               </div>
            </div>

            <button className='btn bg-transparent text-center p-2 border border-gray-100 shadow-sm rounded-1xl w-full mb-5'>
                <MdOutlineSnooze />  Snooze 2 Weeks
            </button>
            <button className='btn bg-transparent text-center p-2 border border-gray-100 shadow-sm rounded-1xl w-full mb-5'>
                <FaArchive />  Archive
            </button>
            <button className='btn bg-transparent text-center p-2 border border-gray-100 shadow-sm rounded-1xl w-full mb-5 text-[#ef4444]'>
                <MdDeleteForever />  Delete
            </button>            

        </div>
        <div className='w-full p-5'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center gap-4'>
                <div className='text-center border border-gray-100 shadow-md rounded-2xl w-full mb-5 p-13'>
                    <h2 className='font-bold text-3xl text-[#244d3f]'>{expectedFriend.days_since_contact}</h2>
                    <p>Days since Contact</p>
                </div>
                <div className='text-center border border-gray-100 shadow-md rounded-2xl w-full mb-5 p-13'>
                    <h2 className='font-bold text-3xl text-[#244d3f]'>{expectedFriend.goal}</h2>
                    <p>Goal</p>
                </div>
                <div className='text-center border border-gray-100 shadow-md rounded-2xl w-full mb-5 p-13'>
                    <h2 className='font-bold text-3xl text-[#244d3f]'>{expectedFriend.next_due_date}</h2>
                    <p>Next Due</p>
                </div>
                
            </div> 

            <div className='grid grid-cols-1 justify-evenly items-center gap-4'>
                <div className='border border-gray-100 shadow-md rounded-2xl w-full mb-5 px-15 py-13'>
                    <div className='flex justify-between'>
                        <div>
                            <h2>Relationship Goal</h2>
                        </div>
                        <div>
                            <button className='btn'>Edit</button>
                        </div>
                    </div>
                    <div>
                        <p>Connect every <span className='font-bold'>30 days</span></p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 justify-evenly items-center gap-4'>
                <div className='border border-gray-100 shadow-md rounded-2xl w-full mb-5 px-15 py-5'>
                    <h2 className='font-bold pb-3'>Quick Check-In</h2>
                    <div className='flex justify-between gap-4'>
                        <div className='bg-[#e9fbf3] border-2 shadow-2xs border-[#e9e9e9] p-5 w-full text-center rounded-2xl'>
                            <p className='text-2xl flex items-center justify-center '><FiPhoneCall /></p> <br />
                            <p>Call</p>
                        </div>
                        <div className='bg-[#e9fbf3] border-2 shadow-2xs border-[#e9e9e9] p-5 w-full text-center rounded-2xl'>
                            <p className='text-2xl flex items-center justify-center '><IoMdText /></p> <br />
                            <p>Text</p>
                        </div>
                        <div className='bg-[#e9fbf3] border-2 shadow-2xs border-[#e9e9e9] p-5 w-full text-center rounded-2xl'>
                            <p className='text-2xl flex items-center justify-center'><FaVideo /></p> <br />
                            <p>Video</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FriendDetails