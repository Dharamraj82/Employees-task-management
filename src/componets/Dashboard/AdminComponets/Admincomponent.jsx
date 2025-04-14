import React, { useContext, useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import GivenTask from './GivenTask';
import { AuthContext } from '../../../context/AuthProvider';

function Admincomponent() {
  const [userData, setUserData] = useContext(AuthContext);
  const [employeeId, setEmployeeId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskAsign, setTaskAsign] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewTask] = useState({});
  const [backHome, setBackHome] = useState(false);

  const createTask = (e) => {
    e.preventDefault();

    const task = {
      category,
      date,
      title,
      description,
      newtask: true,
      failed: false,
      accept: false,
      completed: false
    };

    let matchFound = false;
    const localData = userData.map(user => {
      if (employeeId == user.id) {
      if(user.active)
        {  
        if (task.category && task.description && task.date && task.title) {
          user.tasks.push(task);
          user.taskCounts.newtask += 1;
          matchFound = true;
        } else {
          console.error("New task is incomplete:", task);
        }
        user.tasks = user.tasks.filter(task => Object.keys(task).length > 0);
      }
      else{
        alert("User Is Not Active");
      }
    }
    else{
      alert("Id Doesn't Match");
    }
      return user;
    });
    
    setUserData(localData);

    setEmployeeId('');
    setTitle('');
    setDescription('');
    setDate('');
    setCategory('');
    setTaskAsign('');
  };

  const back = () => {
    setBackHome(true);
  };

  return (
    <>
      {!backHome ? (
        <div className='flex flex-wrap gap-5 h-full mb-0 overflow-hidden'>
          <div className='flex flex-col h-[55%] gap-14 relative'>
            <div className='flex items-center gap-5 p-5 text-3xl text-[#1403ffcd]'>
              <span onClick={back} className='cursor-pointer hover:text-[#1403ff]'>
                <FaArrowAltCircleLeft />
              </span>
              <h1 onClick={back} className='cursor-pointer hover:text-[#1403ff] text-4xl text-[#1403ffc4] font-bold hover:underline'>
                Tasks
              </h1>
            </div>
            <form onSubmit={createTask} className='flex flex-wrap gap-24 px-5'>
              <div className='flex justify-between backdrop-blur-sm bg-opacity-50 w-[100%]'>
                <div className='text-xl font-semibold flex flex-col gap-1 w-[200px]'>
                  <label className='text-zinc-50 text-2xl font-bold'>Employee Id :</label>
                  <input
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    type="text"
                    placeholder='001'
                    className='placeholder:text-zinc-600 placeholder:italic bg-transparent text-zinc-50 text-2xl px-3 py-2 outline-none border-b-2 border-zinc-50 rounded-none'
                  />
                </div>
                <div className='text-xl font-semibold flex flex-col gap-1 w-[200px]'>
                  <label className='text-zinc-50 text-2xl font-bold'>Assign To :</label>
                  <input
                    value={taskAsign}
                    onChange={(e) => setTaskAsign(e.target.value)}
                    type="text"
                    placeholder='Employee Name'
                    className='placeholder:text-zinc-600 placeholder:italic bg-transparent text-zinc-50 text-2xl px-3 py-2 outline-none border-b-2 border-zinc-50 rounded-none'
                  />
                </div>
                <div className='text-xl font-semibold flex flex-col gap-1 w-[200px]'>
                  <label className='text-zinc-50 text-2xl font-bold'>Category :</label>
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className='placeholder:text-zinc-600 placeholder:italic bg-transparent text-zinc-50 text-2xl px-3 py-2 outline-none border-b-2 border-zinc-50 rounded-none'
                  />
                </div>
                <div className='text-xl font-semibold flex flex-col gap-1 w-[200px]'>
                  <label className='text-zinc-50 text-2xl font-bold'>Date :</label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className='bg-transparent text-zinc-50 text-2xl px-3 py-2 outline-none border-b-2 border-zinc-50 rounded-none'
                  />
                </div>
              </div>
              <div className='flex justify-between backdrop-blur-sm bg-opacity-50 w-[100%]'>
                <div className='text-xl font-semibold flex flex-col gap-1 w-[300px]'>
                  <label className='text-zinc-50 text-2xl font-bold'>Task Title :</label>
                  <textarea
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    className='placeholder:text-zinc-600 placeholder:italic bg-transparent text-zinc-50 text-2xl px-3 pt-3 outline-none border-b-2 border-zinc-50 rounded-none resize-none'
                  ></textarea>
                </div>
                <div className='text-xl font-semibold flex flex-col gap-1 w-[400px]'>
                  <label className='text-zinc-50 text-2xl font-bold'>Task Description :</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    className='placeholder:text-zinc-600 placeholder:italic bg-transparent text-zinc-50 text-2xl px-3 pt-3 outline-none border-b-2 border-zinc-50 rounded-none resize-none'
                  ></textarea>
                </div>
                <div className='flex justify-center items-center'>
                  <button type="submit" className='bg-green-400 py-3 px-6 text-2xl font-semibold text-white rounded-md hover:bg-green-500 active:scale-90 transition-transform'>
                    Create Task
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='h-[42%] w-full'>
            {/* <AdminTask /> */}
          </div>
        </div>
      ) : (
        <GivenTask />
      )}
    </>
  );
}

export default Admincomponent;
