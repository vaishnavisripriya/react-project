import React from 'react'
import"../Style/Home.css";
import Cam from "../Style/icon.png"
import add from "../Style/add_member.png"
import more from "../Style/more.png"
import Messages from "./Messages";


const Chat = () => {
  return (
    <div className='chat' style={{backgroundColor:"white"}}>
      <div className="chatInfo">
        <span>vaishu</span>
        <div className="chatIcons">
        <img src={Cam} alt="" style={{height:"20px"}}/>
        <img src={add} alt="" style={{height:"20px"}}/>
        <img src={more} alt="" style={{height:"20px"}}/>
        </div>
      </div>
        <Messages/>
    </div>
  )
}

export default Chat