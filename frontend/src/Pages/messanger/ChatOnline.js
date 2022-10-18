import { useState } from "react";


export default function ChatOnline({user,onlineUsers,setCurrentChat,currentId}) {

    const [friends,setFriends]= useState([]);
    const [OnlineFriends,setOnlineFriends] = useState([]);

  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend hover2">
            <div className="chatOnlineImgContainer">
                <img src={user?.picture} alt="" className="chatOnlineImg"/>
                <div className="chatOnlineBadge"></div>
            </div>
            <span  className="chatOnlineName">
                Aflah Backer
            </span>
        </div>
        <div className="chatOnlineFriend hover2">
            <div className="chatOnlineImgContainer">
                <img src={user?.picture} alt="" className="chatOnlineImg"/>
                <div className="chatOnlineBadge"></div>
            </div>
            <span  className="chatOnlineName">
                Aflah Backer
            </span>
        </div>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img src={user?.picture} alt="" className="chatOnlineImg"/>
                <div className="chatOnlineBadge"></div>
            </div>
            <span  className="chatOnlineName">
                Aflah Backer
            </span>
        </div>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img src={user?.picture} alt="" className="chatOnlineImg"/>
                <div className="chatOnlineBadge"></div>
            </div>
            <span  className="chatOnlineName">
                Aflah Backer
            </span>
        </div>
      
    </div>
  )
}
