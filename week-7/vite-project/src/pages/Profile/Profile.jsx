import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div className='profile'>
        <div className='card'>
            <div className='colured-box'>
            </div>
            <div className='profile-details'>
                <img className="profile-pic" src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp" alt="profileImage"/>
                <div className='name' style={{display:'flex',alignItems:'center'}}>
                <h2 style={{ marginRight: '10px' }}>Rita Correri</h2>
                    <p>32</p>
                </div>
                 <p>London</p>
            </div>
           <div className='social-status'>
            <SocialCount type="Followers" count="80K"/>
            <SocialCount type="Likes" count="803K"/>
            <SocialCount type="Photos" count="1.4K"/>
           </div>
        </div>
        
    </div>
  )
}

const SocialCount=({type,count})=>{
    return(
      <div>
        <h3>{count}</h3>
      
        <p>{type}</p>
    </div>
    )
}

export default Profile
