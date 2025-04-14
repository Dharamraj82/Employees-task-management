import React, { useContext, useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Admincomponent from './Admincomponent';
import AdminTask from './AdminTask';
import { AuthContext } from '../../../context/AuthProvider';

const GivenTask = () => {
  const [userData, setUserData] =  useContext(AuthContext)

    const [createTask, setCreateTask] = useState(false); 
    const createTasks = () => { 
        setCreateTask(true); 
    };
  return (
<>
  {!createTask ? 
  (<div className='h-full w-full flex flex-col justify-between pl-4 pr-6'>
    <div className='flex items-center justify-center gap-6 text-3xl mt-2 text-green-500'>
      <h1 className='text-4xl text-blue-600 font-bold uppercase'>Create Task</h1>
      <span onClick={createTasks} className=' text-4xl hover:cursor-pointer hover:text-green-600'>
        <FaArrowAltCircleRight /></span>
    </div>
    <div  className='flex items-center justify-center flex-row gap-10'>

    {userData.map((e, i) =>{
      if(e.taskCounts.completed >= 2){
     return( 
    
 <div key={i} className="backdrop-blur-md flex flex-col justify-center items-center w-72 h-80 p-6 bg-[#08ceff19] rounded-md gap-2 text-center">
	<img src={e.image} alt="" className="  h-40 w-34 rounded-md" />
	<div>
		<h2 className="text-xl text-[#00e1ff] font-semibold">{e.name}</h2>
		<span className=" pb-2 text-base text-[#fff]">Employee</span>
		<p className='text-[#ffffffbf]'>Great work, team! 🎉 Your dedication inspires us all—let’s keep pushing forward together</p>
	</div>
 </div>)}
    }
    )}
</div>
   
     <div className='h-[40%]'> <AdminTask /> </div> 
    </div> ): (<Admincomponent />)}
</>
  )
}

export default GivenTask


