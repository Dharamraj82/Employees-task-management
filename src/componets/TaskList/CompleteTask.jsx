import React from 'react'

const CompleteTask = ({employeeData}) => {



  
  
  return (
    <div className='h-full w-[300px] bg-green-400 text-zinc-50 p-5 shrink-0 rounded-xl flex flex-col text-left'>
    <div className='flex items-center justify-between mb-5'>
    <h1 className='bg-red-600 text-xl font-bold px-2 rounded'>{employeeData.category}</h1>
    <h1 className='text-base font-medium text-zinc-950'>{employeeData.date}</h1>
    </div>
    <h1 className='text-2xl font-bold '>{employeeData.title}</h1>
    <p className='text-xl text-zinc-950 font-medium '>{employeeData.description}</p>
    <div className='flex justify-center items-baseline mt-auto'>
    {/* <button className='px-2 py-1 bg-zinc-200 text-base text-red-500 rounded-md hover:bg-zinc-50'>Accept</button> */}
    <button className='px-2 py-1 bg-green-500 text-base text-zinc-950 rounded-md '>Completed</button>    
    </div>
</div>
  )
}

export default CompleteTask