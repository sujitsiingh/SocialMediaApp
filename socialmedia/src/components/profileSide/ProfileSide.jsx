import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard location='homepage'/>
    <FollowersCard/>
    </div>
  )
}

export default ProfileSide
