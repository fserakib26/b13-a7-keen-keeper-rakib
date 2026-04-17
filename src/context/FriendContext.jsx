import React, { Children, createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

  const [storedFriend, setStoredFriend] = useState([]);
  const [storedMessage, setStoredMessage] = useState([]);
  const [storedVideo, setStoredVideo] = useState([]);
    
  const handleAudioCall=(currentFriend)=>{      
  console.log(currentFriend)
    setStoredFriend((prev)=> [...prev, currentFriend])
    toast.success("Calling!");
                  
  }

  const handleMessage=(currentFriend)=>{    
  console.log(currentFriend)
    setStoredMessage((prev)=> [...prev, currentFriend]) 
    toast.success("Message has been send!");
                  
  }
  const handleVideo=(currentFriend)=>{      
  console.log(currentFriend)
    setStoredVideo((prev)=> [...prev, currentFriend]) 
    toast.success("Video Call on going!");
                  
  }

  const data ={   
    storedFriend, 
    setStoredFriend, 
    handleAudioCall,
    storedMessage,
    setStoredMessage,
    handleMessage,
    storedVideo,
    setStoredVideo,
    handleVideo,   

  };
  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
}

export default FriendProvider