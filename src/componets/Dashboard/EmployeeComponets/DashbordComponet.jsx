import React, { useEffect, useState } from 'react'
import { IoHome } from "react-icons/io5";
import { SiGoogletasks } from "react-icons/si";
import { FaMessage } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

function DashbordComponet(props) {

  const [showMenu, setShowMenu] = useState(true)
  const show=()=>{
    setShowMenu(!showMenu)
  }

  const username = props.employeeData ? props.employeeData.name : 'Admin';
  const userImage = props.employeeData?.image ? props.employeeData.image: "https://images.unsplash.com/photo-1697811599461-38124b3decc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHN1aXR8ZW58MHwxfDB8fHww";
  const logOutUser =()=>{
    
      localStorage.setItem('loggedInUser', '')
      // console.log(props);
      props.changeUser('')
      // window.location.reload()

      
  }

  return (
    <>
    {showMenu ? ( 

<div className='h-full shrink-0 w-72 bg-blue-950 p-5 flex items-center flex-col gap-10 relative'>
  <div className='absolute top-0 right-0'>
    <IoCloseOutline 
      size="3rem" 
      onClick={show} 
      className='text-[#ff9100] cursor-pointer hover:text-[#ff9100ac]'
    />
  </div>
   <div className='flex flex-col items-center gap-3'> 
   <img className='h-44 w-44 rounded-full  object-cover' src={userImage} alt="Employee Img" />

    <h1 className='text-2xl text-zinc-100 font-semibold uppercase'>{username}</h1>
   </div>
   <div className=' bg-red-00 h-[70%] flex flex-col w-full text-zinc-400 text-xl justify-between px-4 '>
       <div className='flex flex-col gap-5'>
       <div className='hover:text-zinc-50 py-2 hover:bg-zinc-400/10 hover:rounded-md hover:px-4 hover:w-full flex gap-6 cursor-pointer transition-all duration-300 ease-in-out'>
        <IoHome/>
        <h1 className=' '>Dashboard </h1>
        </div>
        <div className='hover:text-zinc-50 py-2 hover:bg-zinc-400/10 hover:rounded-md hover:px-4 hover:w-full flex gap-6 cursor-pointer transition-all duration-300 ease-in-out'>
        <SiGoogletasks/>
        <h1 className=' '>Tasks</h1>
        </div>
        <div className='hover:text-zinc-50 py-2 hover:bg-zinc-400/10 hover:rounded-md hover:px-4 hover:w-full flex gap-6 cursor-pointer transition-all duration-300 ease-in-out'>
        <FaMessage/>
        <h1 className=' '>Message</h1>
        </div>
       </div>
        <button onClick={logOutUser} className='mt-10 py-5 bg-red-500 text-zinc-950 font-bold rounded-md hover:bg-red-600 hover:text-zinc-700 active:scale-(0.9)'>Logout</button>
    </div>
    
</div>):('')}
{!showMenu && (<div className='p-5 flex flex-col justify-between'>
  <TiThMenu size="2rem" onClick={show} className='text-[#003cff] cursor-pointer hover:text-[#003cffc9]'/> 
  <RiLogoutCircleLine size="2rem" onClick={logOutUser} className='text-[#ff000078] cursor-pointer hover:text-[#ff0000]'/> 
  </div>)}
    </>
  )
}

export default DashbordComponet


