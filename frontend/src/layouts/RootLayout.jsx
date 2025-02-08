import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Bottombar from '../components/Bottombar'
import { useState,useEffect } from 'react'
import axios from 'axios'

function RootLayout() {
  const [isAuthenticate , setAuth] = useState(false)
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const verifyUrl = `${import.meta.env.VITE_BASE_URL}/api/v1/user/verifyuser`
  useEffect( ()=>{
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    if(!token || !userId){
      navigate('/login')
    }
    axios.post(verifyUrl,{token:token , userId:userId})
    .then((res)=>{
      navigate(`${pathname}`);
      setAuth(true);
    }).catch((err)=>{
      console.log(err);
      navigate('/login')
    })
  },[])
  return (
    <>
    
    {/* <div className='w-full flex flex-wrap'>
      <Navbar/>
      <Sidebar/>
      <section className='flex flex-1 h-full ml-2'>
        <Outlet/>
      </section>
    </div> */}
    <div className='static' >
      <div className='fixed w-full bg-black z-10 top-0 left-0'>
        <Navbar />
      </div>
      <div className='mt-20 hidden md:flex md:flex-row'>
        <div className='fixed left-0' > <Sidebar /> </div>
        <div className='xl:ml-56 md:ml-20 justify-center mx-auto' > <Outlet /> </div>
      </div>
      <div className='mt-[75px] md:hidden flex flex-col relative'>
        <div className='ml-10 px-auto my-auto' > <Outlet /> </div>
        <div className='fixed w-full bg-black z-10 bottom-0' > <Bottombar /> </div>
      </div>
    </div>
    </>
  )
}

export default RootLayout
