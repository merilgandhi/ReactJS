import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <h2>Please Login</h2>
    return (
        <div><h3>Welcome {user.username}</h3></div>
    )
}

export default Profile
