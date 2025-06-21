import React, {useContext} from 'react'
import Usercontext from '../context/userContext'

function Profile() {
    const {user} = useContext(Usercontext)

    if(!user) return <div>Login is required</div>
    
    return <div> Welcome {user.username}! </div> 
}

export default Profile