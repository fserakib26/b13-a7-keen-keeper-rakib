import React, { use } from 'react'
import FriendsCard from '../shared/friendsCard/FriendsCard';

const friendsPromise = fetch('/friends.json').then(res=>res.json())

const FriendsAll = () => {

    const friends = use(friendsPromise)
    
    const statusColors = {
    "on-track": "bg-[#244d3f] text-white",
    "overdue": "bg-[#ef4444] text-white",
    "almost due": "bg-[#efad44] text-white"    
    };

    return (
       <div className='max-w-7xl mx-auto'>
            <div>
                <div className="divider before:bg-gray-300 after:bg-gray-300 text-gray-300"></div>            
            </div>
            <h2 className='font-bold text-3xl mb-5 text-center md:text-left'>Your Friends</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 p-5'>
                {
                    friends.map((friend, ind)=> {
                        return (
                            <FriendsCard key={ind} friend={friend} statusColors={statusColors}/>
                            
                        )
                    })
                }
            </div>
       </div>
    )
}

export default FriendsAll