import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase-config'
import { useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';


const Navbar = () => {

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    async function signOutHandler() {
        await signOut(auth)
    }

    function IsLogged() {
        if (user) {
            console.log(user)
            return <div className='flex justify-center bg-orange-500 px-2 items-center text-xl rounded'>
                <button onClick={signOutHandler}>Sign Out</button>
            </div>
        } else {
            return <div>
                <Link className='px-3 hover:text-rose-600' to="/SignIn">Sign In</Link>
                <Link className='px-3 hover:text-rose-600' to="/SignUp">Sign up</Link>
            </div>
        }
    }


    return (
        <div>
            <div className='bg-blue-700 p-8'>
                <div className='flex justify-between'>
                    <div className='text-slate-100 text-3xl'>

                        <Link className='px-3' to="/">Auth.in</Link>
                    </div>
                    <div className='flex text-slate-100 text-xl'>
                        
                        {IsLogged()}
                        <div className='px-4'>
                        {user?.email}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar