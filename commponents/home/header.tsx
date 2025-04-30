'use client'
import React, { useState } from 'react'

const Header = () => {
    const [user, setuser] = useState(() => {
        if (typeof window !== "undefined"){
          return localStorage.getItem('name')
        }
    })
  return (
    <div className='p-5 shadow-2xl bg-zinc-800 text-white text-xs'>
        {user && (
            <div>
                <h2>{user}</h2>
            </div>
        )}
    </div>
  )
}

export default Header