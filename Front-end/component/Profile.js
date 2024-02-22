import React from 'react'
import {useAuth} from './auth'
const Profile = () => {
  const auth=useAuth()
  const handlelogout=()=>{
    auth.logout()
  }
  return (
    <div class="hai">
      <p>Welcome user</p>
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Profile
