import React, { useContext } from 'react'
import { FriendContext } from '../../context/FriendContext';

const Friends = () => {

  const {storedFriend} = useContext(FriendContext)
  
  console.log(storedFriend);

  return (
    <div></div>
  )
}

export default Friends