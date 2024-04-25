'use client'

import React from 'react'
import logo from '/internship/stsp-easy1/public/logo_stsp.png'
import Link from 'next/link'
import Image from 'next/image'


function Register() {
  return (
    <>
       <link rel="preconnect" href="https://fonts.gstatic.com" priority="true"  />
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap" rel="stylesheet" priority="true" />
    <div style={{backgroundColor:'#19A7CE'}} className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div className="
    flex flex-col
    bg-white
    shadow-md
    px-4
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    rounded-3xl
    w-50
    max-w-md
  ">
    <Image src={logo} alt='logo' style={{width:270,marginLeft:30,marginTop:-30,marginBottom:-10}}/>
    <div style={{fontFamily: "Sarabun",fontSize:18}} className="mb-2 mt-2 self-center text-xl sm:text-sm text-gray-800">
      สมัครสมาชิกใช้งาน E-Document
    </div>
    <div className="mt-3">
      <form action="#">
        <div className="flex flex-col mb-5">
          <label style={{fontFamily: "Sarabun"}} htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">ชื่อผู้ใช้</label>
          <div className="relative">
            <div className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
              <i className="fas fa-at text-blue-500" />
            </div>
            <input id="username" type="username" name="username" className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            " placeholder="Username" required />
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label style={{fontFamily: "Sarabun"}} htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">อีเมล</label>
          <div className="relative">
            <div className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
              <i className="fas fa-at text-blue-500" />
            </div>
            <input id="email" type="email" name="email" className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            " placeholder="Email" required/>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label style={{fontFamily: "Sarabun"}} htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">รหัสผ่าน</label>
          <div className="relative">
            <div className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
              <span>
                <i className="fas fa-lock text-blue-500" />
              </span>
            </div>
            <input id="password" type="password" name="password" className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            " placeholder="Password" required/>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label style={{fontFamily: "Sarabun"}} htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">ยืนยันรหัสผ่าน</label>
          <div className="relative">
            <div className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
              <span>
                <i className="fas fa-lock text-blue-500" />
              </span>
            </div>
            <input id="cpassword" type="password" name="cpassword" className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            " placeholder="Confirm Password" required/>
          </div>
        </div>
        <div className="flex w-full">
          <button style={{backgroundColor:'#7BC74D'}} type="submit" className="
            flex
            mt-2
            items-center
            justify-center
            focus:outline-none
            text-white text-sm
            sm:text-base
            
            hover:bg-blue-600
            rounded-2xl
            py-2
            w-full
            transition
            duration-150
            ease-in
          ">
            <span style={{fontFamily: "Sarabun",}} className="mr-2 uppercase">สมัครสมาชิก</span>
            <span>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
  <div className="flex justify-center items-center mt-6">
    <a href="#" target="_blank" className="
      inline-flex
      items-center
      text-gray-700
      font-medium
      text-xs text-center
    ">
       <p style={{fontSize:14,fontFamily: "Sarabun"}} className="ml-2 text-white">มีบัญชีอยู่แล้วใช่ไหม?
      </p></a><Link href='/' style={{fontSize:15,fontFamily: "Sarabun"}} className="text-xs ml-2 text-blue-500 text-white ">เข้าสู่ระบบ</Link>
  </div>
</div>

    </>
  )
}

export default Register