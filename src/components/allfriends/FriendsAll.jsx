import React, { use } from 'react'

const friendsPromise = fetch('/friends.json').then(res=>res.json())

const FriendsAll = () => {

    const friends = use(friendsPromise)
    

    return (
       <div className='max-w-7xl mx-auto'>
            <div>
                <div className="divider before:bg-gray-300 after:bg-gray-300 text-gray-300"></div>            
            </div>
            <h2 className='font-bold text-3xl'>Your Friends</h2>

            <div className='grid grid-cols-4 gap-2'>
                {
                    friends.map(friend=> {
                        return <div>
                            <div className='bg-white border border-gray-300 shadow rounded-2xl p-5 space-y-4 text-center'>
                                <img src={friend.picture} alt="" className='rounded-full mx-auto'/>
                                    <h2 className='font-bold text-2xl'>{friend.name}</h2>
                                    <p>{friend.days_since_contact}d ago</p>
                                    <p className='bg-[#cbfadb] text-[#244d3f] rounded-full px-3'>{friend.tags}</p>
                                    <p>{friend.status}</p>
                            </div>
                        </div>
                    })
                }
            </div>
       </div>
    )
}

export default FriendsAll