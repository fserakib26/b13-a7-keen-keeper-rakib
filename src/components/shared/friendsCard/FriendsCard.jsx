import React from 'react'
import { Link } from 'react-router'

const FriendsCard = ({friend, statusColors}) => {
  return (
     <Link to={`/friendDetails/${friend.id}`}>
        <div className='bg-white border border-gray-300 shadow-sm rounded-2xl p-5 space-y-4 text-center'>
            <img src={friend.picture} alt="" className='rounded-full mx-auto'/>
            <h2 className='font-bold text-2xl'>{friend.name}</h2>
            <p>{friend.days_since_contact}d ago</p>
            <div className='flex justify-center items-center'>
                {friend.tags.map((tag, ind)=> (
                    <p key={ind} className='bg-[#cbfadb] text-[#244d3f] rounded-full w-fit px-2 mr-2'>{tag}</p>
                ))}
            </div>
            <span className={`px-3 py-1 rounded-full 
                ${statusColors[friend.status] || "bg-gray-400 text-white"}
            `}
            >
                {friend.status}
            </span>
            
        </div>
    </Link>
  )
}

export default FriendsCard