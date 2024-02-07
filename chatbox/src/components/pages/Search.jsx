import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user '/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <div className='userChatInfo'></div> 
        <span>vaishu</span>
      </div>
    </div>
  )
}

export default Search