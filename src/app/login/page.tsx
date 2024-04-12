"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { axios } from 'axios'

const page = () => {
const [user, setUser] = React.useState({
  email: "",
  password: "",
})

const onLogIn = async () =>{}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-bold bg-black text-white">
      <h1 className='m-11 text-5xl text-red-700'>Login</h1>
      <hr />
             <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
             <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button onClick={onLogIn} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 font-semibold">Signup here</button>
            <Link className='font-normal' href={"/signUp"}>Visit Signup page</Link>
    </div>
  )
}

export default page

