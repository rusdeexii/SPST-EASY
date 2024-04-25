'use client'
import { useEffect } from 'react';
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';

function page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated'){
            router.push('/')
        }
    },[router,status])
  return (
    status === 'authenticated' && session.user &&(
    <div>
<div className="h-screen w-full bg-gray-50 flex justify-center items-center">
      <div className="h-56 w-72 absolute flex justify-center items-center">
        <img
          className="object-cover h-20 w-20 rounded-full"
          src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
          alt=""
        />
      </div>

      <div
        className="
          h-56
          mx-4
          w-5/6
          bg-blue-400
          rounded-3xl
          shadow-md
          sm:w-80 sm:mx-0
        "
      >
        <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
          <h1 className="text-white">{session.user.role}</h1>  
          
        </div>

        <div
          className="
            bg-white
            h-1/2
            w-full
            rounded-3xl
            flex flex-col
            justify-around
            items-center
          "
        >
          <div className="mt-8 w-full h-1/2 flex flex-col justify-center items-center">
            <h1 className="text-gray-700 font-bold">{session.user.name}</h1>
            <h1 className="text-gray-500 text-sm">{session.user.email} </h1>
          </div>
        </div>
        <button onClick={() => signOut({ callbackUrl: '/'})} style={{backgroundColor:'red'}} type="submit" className="
            flex
            mt-5
            items-center
            justify-center
            focus:outline-none
            text-white text-sm
            sm:text-base
            bg-blue-500
            hover:bg-blue-600
            rounded-2xl
            py-2
            w-full
            transition
            duration-150
            ease-in
          ">
            <span style={{fontFamily: "Sarabun"}} className="mr-2 uppercase">Signout</span>
            <span>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
      </div>
    </div>
    </div>
    )
  )
}

export default page
