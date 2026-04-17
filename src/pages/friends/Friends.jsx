import React, { useContext } from 'react'
import { FriendContext } from '../../context/FriendContext';

const Friends = () => {

  const {storedFriend, storedMessage, storedVideo} = useContext(FriendContext)
  
  if(storedFriend.length === 0 || storedMessage === 0 || storedVideo === 0 ){
    return <div className='bg-green-100 text-green-950 font-bold text-3xl text-center py-40 my-10 max-w-7xl mx-auto rounded-2xl shadow-md border-2 border-gray-300'>
      <h2>There is no History of Call / Message / Video</h2>
    </div>
  }
  

  return <div className='max-w-7xl mx-auto pt-10 pb-10'>
    <div>
      <h2 className='font-bold text-5xl pb-5'>Timeline </h2>
    </div>

    <div>
      <input type="text" className="input" placeholder="Filter Timeline" list="all" />
      <datalist id="all">
        <option value="Text"></option>
        <option value="Message"></option>
        <option value="Video"></option>       
      </datalist>
    </div> 

    {
      storedFriend.map(friend=>(
        <div>
          <div className='flex w-full border border-gray-300 shadow-md gap-4 mb-5 mt-5 rounded-sm'>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2><span className='font-bold'>Meetup</span> with {friend.name}</h2>
              <p>{friend.next_due_date}</p>
            </div>
          </div> 
        </div>
      ) )
    } 


  </div>;
};

export default Friends;