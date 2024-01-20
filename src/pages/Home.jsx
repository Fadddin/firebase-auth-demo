import React from 'react'
import { auth } from '../firebase-config'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';

const Home = () => {

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return (
        <div>
            Home
            <div className='flex text-3xl items-center justify-center '>
                {user? "USER DATA" : "LOG IN TO PROCEED"}
            </div>
        </div>
    )
}

export default Home