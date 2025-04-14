import React, { useState } from 'react'
import DashbordComponet from './EmployeeComponets/DashbordComponet'
import Tasks from './EmployeeComponets/Tasks'
import Calender from './EmployeeComponets/Calender'
import TaskList from '../TaskList/TaskList'


function EmployeeDashboard(props) {

  
  return (
    <>
  <div className='h-screen flex items-center justify-center bg-zinc-50'>
  <div className='h-[80vh] w-[90vw] bg-zinc-200 flex shadow-[1px_2px_3px_hsl(220deg_60%_50%_/_0.3),2px_4px_6px_hsl(220deg_60%_50%_/_0.3),4px_8px_12px_hsl(220deg_60%_50%_/_0.3)]'>
      
    <DashbordComponet changeUser ={props.changeUser} employeeData ={props.employeeData} />
    <div className='h-full w-[calc(100%-288px)] flex flex-col gap-3 p-3'>
    <div className='flex gap-5'>
    <Tasks employeeData = {props.employeeData}/>
    <Calender/>
    </div>
    <TaskList employeeData = {props.employeeData}/>
    </div>
    </div> 
    </div>
    </>
  )
}

export default EmployeeDashboard