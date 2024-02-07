import React from 'react'
import Sidebar from './pages/Sidebar'
import Chat from './pages/Chat'
import"./Style/Home.css";

const Home = () => {
  return (
    <div className='home'>
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
    </div>
  )
}

export default Home