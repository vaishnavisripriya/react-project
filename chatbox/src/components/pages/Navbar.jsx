import React from 'react'
import"../Style/Home.css"
import{Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat Box</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"alt=""/>
        <span>vaishu</span>
        <Link to="/">
        <button style={{borderRadius:"50px"}}>logout</button>
        </Link>
      </div>

    </div>
  )
}

export default Navbar