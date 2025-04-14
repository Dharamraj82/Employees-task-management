import React from 'react'


function Tasks({employeeData}) {
  const taskCounts = employeeData.taskCounts;
  
  return (
    <>
            <div className='h-[270px] w-[450px] shrink-0 flex flex-wrap p-1 gap-3 items-center justify-center'>
            <div className="h-[48%] w-[48%] bg-blue-400 rounded-xl flex flex-col justify-center gap-2 p-4 text-zinc-100">
              <h1 className='text-5xl font-bold'>{taskCounts.newtask}</h1>
              <h1 className='text-2xl font-semibold'>New Task</h1>
            </div>
            <div className="h-[48%] w-[48%] bg-green-400 rounded-xl flex-col justify-center gap-2 p-4 text-zinc-950">
                <h1 className='text-5xl font-bold'>{taskCounts.accept}</h1>
                <h1 className='text-2xl font-semibold'>Accepted</h1>
              </div>
              <div className="h-[48%] w-[48%] bg-yellow-300 rounded-xl flex-col justify-center gap-2 p-4 text-zinc-50">
                <h1 className='text-5xl font-bold'>{taskCounts.completed}</h1>
                <h1 className='text-2xl font-semibold'>Completed</h1>
              </div>
              <div className="h-[48%] w-[48%] bg-red-400 rounded-xl flex-col justify-center gap-2 p-4 text-zinc-50">
                <h1 className='text-5xl font-bold'>{taskCounts.failed}</h1>
                <h1 className='text-2xl font-semibold'>Failed</h1>
              </div>
              </div>
    </>
  )
}

export default Tasks