import React, { useEffect, useState } from 'react'
import FriendsCard from '../shared/friendsCard/FriendsCard';

const FriendsAll = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('/friends.json')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

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

            <h2 className='font-bold text-3xl mb-5 text-center md:text-left'>
                Your Friends
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 p-5'>
                {
                    friends.map((friend)=> (
                        <FriendsCard 
                            key={friend.id} 
                            friend={friend} 
                            statusColors={statusColors}
                        />
                    ))
                }
            </div>
       </div>
    )
}

export default FriendsAll