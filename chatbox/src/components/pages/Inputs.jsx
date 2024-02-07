import React from 'react'
import at from "../Style/attach.jpg"
import im from "../Style/addimage.png"


const Inputs = () => {
  return (
    <div className='input' >
      <input placeholder='Type something...'/>
    <div className="send">
      <img src={at} alt="" style={{height:"20px"}}/>
      <input type="file" style={{display:"none"}} id="file"/>
      <label htmlFor="file">
        <img src={im} alt="" style={{height:"20px"}}/>
      </label>
      <button style={{borderRadius:"50px"}}>Send</button>
    </div>
    </div>
  )
}

export default Inputs