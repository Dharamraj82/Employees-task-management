import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { MdBlockFlipped } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";

const AdminTask = () => {

    const [userData, setUserData] =  useContext(AuthContext)

  return (
      <div className='h-[100%] w-[100%] flex-col flex bg-red-'>
    
      <div className='flex h-[50px] w-full items-center justify-between gap-14'>
      <h1 className='w-1/4 text-2xl font-medium text-zinc-50 text-center'>Employee Name</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-zinc-50 text-center'>New Task</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-zinc-50 text-center'>Accepted</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-zinc-50 text-center'>Completed</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-zinc-50 text-center'>Failed</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-zinc-50 text-center'>Active</h1>
      </div>

    <div id='admintasks' className='overflow-y-auto h-[80%] w-[100%] shrink-0 flex flex-wrap gap-2'>
 
   {userData.map((e, i) =>{
      const activeStatus = e.active ? <FaCheck className="text-green-500"/> : <MdBlockFlipped className="text-red-500"/>;
     return( 
      <div key={i} className='hover:bg-red-500/30 flex h-[50px] w-full items-center rounded justify-between gap-14 backdrop-blur-lg bg-white/10'>
      <h1 className='w-1/4 text-2xl font-medium text-zinc-50 text-center'>{e.name}</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-blue-500 text-center'>{e.taskCounts.newtask}</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-yellow-400 text-center'>{e.taskCounts.accept}</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-green-500 text-center'>{e.taskCounts.completed}</h1>
      <h1 className='w-1/5 text-2xl font-semibold text-red-500 text-center'>{e.taskCounts.failed}</h1>
      <h1 className='w-1/5 text-xl p-2 font-semibold text-zinc-50 flex items-center justify-end gap-10'>{activeStatus} <TiArrowRightThick className="text-2xl text-zinc-400 hover:text-zinc-50 cursor-pointer"/></h1>
      </div>)
})}
    
</div>
</div>

  )
}

export default AdminTask