import React, { Children, createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

  const [storedFriend, setStoredFriend] = useState([]);
    
  const handleAudioCall=(currentFriend)=>{      
    setStoredFriend([...storedFriend, currentFriend]) 
    toast.success("Calling!");
                  
  }
  const data ={   
    storedFriend, 
    setStoredFriend, 
    handleAudioCall,

  };
  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
}

export default FriendProvider